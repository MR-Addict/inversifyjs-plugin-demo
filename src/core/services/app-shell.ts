import { inject, injectable } from "inversify";

import type {
  CommandContribution,
  Disposable,
  NoticeOptions,
  PluginMeta,
  PluginPanel,
  PluginPanelOptions,
  UiApi,
} from "../contracts.js";
import { TYPES } from "../tokens.js";
import {
  getDefaultWorkbenchLayoutState,
  mergeWorkbenchLayoutState,
  type WorkbenchLayoutState,
  WorkbenchLayoutStorage,
} from "./workbench-layout-storage.js";

type SidebarSide = "left" | "right";

@injectable()
export class AppShell implements UiApi {
  private readonly commandButtons = new Map<string, HTMLButtonElement>();
  private layoutState: WorkbenchLayoutState = getDefaultWorkbenchLayoutState();
  private readonly panels = new Map<string, PluginPanel>();
  private readonly pluginStates = new Map<string, boolean>();
  private auxGroupCountItem!: HTMLElement;
  private auxPanelStateItem!: HTMLElement;
  private auxSidebarStateItem!: HTMLElement;
  private bottomPanel!: HTMLElement;
  private bottomResizeHandle!: HTMLDivElement;
  private centerStage!: HTMLDivElement;
  private commandBar!: HTMLDivElement;
  private commandEmptyState!: HTMLParagraphElement;
  private commandCountItem!: HTMLSpanElement;
  private editorGroups!: HTMLDivElement;
  private layoutCountItem!: HTMLSpanElement;
  private leftResizeHandle!: HTMLDivElement;
  private leftSidebar!: HTMLElement;
  private loadedCountItem!: HTMLSpanElement;
  private logList!: HTMLUListElement;
  private noticeHost!: HTMLDivElement;
  private panelCountItem!: HTMLSpanElement;
  private panelEmptyState!: HTMLDivElement;
  private panelHost!: HTMLDivElement;
  private pluginCatalog!: HTMLDivElement;
  private rightResizeHandle!: HTMLDivElement;
  private rightSidebar!: HTMLElement;
  private secondaryEditorGroup!: HTMLElement;
  private splitEditorButton!: HTMLButtonElement;
  private toggleBottomPanelButton!: HTMLButtonElement;
  private toggleLeftSidebarButton!: HTMLButtonElement;
  private toggleRightSidebarButton!: HTMLButtonElement;
  private workbenchBody!: HTMLDivElement;

  public constructor(
    @inject(TYPES.Document) private readonly document: Document,
    @inject(TYPES.RootElement) private readonly root: HTMLElement,
    @inject(TYPES.WorkbenchLayoutStorage)
    private readonly layoutStorage: WorkbenchLayoutStorage,
  ) {}

  public mount(appName: string, description: string): void {
    this.layoutState = this.layoutStorage.load();
    this.root.replaceChildren();
    this.commandButtons.clear();
    this.panels.clear();
    this.pluginStates.clear();

    const shell = this.create("div", "workbench");
    const navbar = this.createNavbar(appName, description);
    this.workbenchBody = this.create("div", "workbench__body");
    this.leftSidebar = this.createLeftSidebar();
    this.leftResizeHandle = this.createResizeHandle("vertical", "Resize left sidebar");
    this.centerStage = this.createCenterStage();
    this.rightResizeHandle = this.createResizeHandle("vertical", "Resize right sidebar");
    this.rightSidebar = this.createRightSidebar();
    this.workbenchBody.append(
      this.leftSidebar,
      this.leftResizeHandle,
      this.centerStage,
      this.rightResizeHandle,
      this.rightSidebar,
    );

    const statusBar = this.createStatusBar();
    this.noticeHost = this.create("div", "notice-stack");

    shell.append(navbar, this.workbenchBody, statusBar);
    this.root.append(shell, this.noticeHost);
    this.bindResizeHandles();
    this.applyLayoutState();
    this.appendLog("info", "Browser workbench shell initialized. Use the sidebar to load internal extensions.");
    this.refreshWorkbenchStats();
  }

  public addPluginCard(meta: PluginMeta, initialLoaded: boolean, onToggle: () => Promise<boolean>): void {
    const card = this.create("article", "plugin-card");
    const header = this.create("div", "plugin-card__header");
    const titleBlock = this.create("div", "plugin-card__title-block");
    const title = this.create("h3", "plugin-card__title", meta.name);
    const pluginId = this.create("p", "plugin-card__id", meta.id);
    const status = this.create("span", "plugin-card__status");
    titleBlock.append(title, pluginId);
    header.append(titleBlock, status);

    const description = this.create("p", "plugin-card__description", meta.description);
    const button = this.create("button", "button button--ghost", "Load plugin");
    button.type = "button";

    let loaded = initialLoaded;
    this.pluginStates.set(meta.id, loaded);

    const syncState = (): void => {
      this.pluginStates.set(meta.id, loaded);
      status.textContent = loaded ? "Loaded" : "Not loaded";
      status.className = loaded ? "plugin-card__status plugin-card__status--loaded" : "plugin-card__status";
      button.textContent = loaded ? "Unload plugin" : "Load plugin";
      this.refreshWorkbenchStats();
    };

    button.addEventListener("click", async () => {
      button.disabled = true;
      button.textContent = loaded ? "Unloading..." : "Loading...";
      loaded = await onToggle();
      syncState();
      button.disabled = false;
    });

    syncState();
    card.append(header, description, button);
    this.pluginCatalog.append(card);
  }

  public addCommand(command: CommandContribution): Disposable {
    if (this.commandButtons.has(command.id)) {
      throw new Error(`Command "${command.id}" is already registered.`);
    }

    const button = this.create("button", "button button--primary", command.title);
    button.type = "button";
    button.addEventListener("click", command.run);

    this.commandButtons.set(command.id, button);
    this.commandBar.append(button);
    this.refreshWorkbenchStats();

    return {
      dispose: () => {
        button.removeEventListener("click", command.run);
        button.remove();
        this.commandButtons.delete(command.id);
        this.refreshWorkbenchStats();
      },
    };
  }

  public createPanel(options: PluginPanelOptions): PluginPanel {
    if (this.panels.has(options.id)) {
      throw new Error(`Panel "${options.id}" is already mounted.`);
    }

    const panel = this.create("article", "plugin-panel");
    const header = this.create("div", "plugin-panel__header");
    const title = this.create("h3", "plugin-panel__title", options.title);
    const status = this.create("span", "plugin-panel__status", "Ready");
    header.append(title, status);

    const description = this.create("p", "plugin-panel__description", options.description);
    const body = this.create("div", "plugin-panel__body");
    panel.append(header, description, body);
    this.panelHost.append(panel);

    const handle: PluginPanel = {
      id: options.id,
      element: panel,
      body,
      setStatus: (text: string) => {
        status.textContent = text;
      },
      destroy: () => {
        if (!this.panels.has(options.id)) {
          return;
        }

        panel.remove();
        this.panels.delete(options.id);
        this.refreshWorkbenchStats();
      },
    };

    this.panels.set(options.id, handle);
    this.refreshWorkbenchStats();
    return handle;
  }

  public showNotice(message: string, options: NoticeOptions = {}): void {
    const notice = this.create("div", `notice notice--${options.kind ?? "info"}`, message);
    const timeoutMs = options.timeoutMs ?? 3200;

    this.noticeHost.prepend(notice);
    window.setTimeout(() => {
      notice.remove();
    }, timeoutMs);
  }

  public appendLog(level: "info" | "warn", message: string): void {
    const item = this.create("li", "log-item");
    const levelBadge = this.create("span", level === "warn" ? "log-level log-level--warn" : "log-level", level);
    const time = this.create("span", "log-time", new Date().toLocaleTimeString());
    const text = this.create("span", "", message);

    item.append(levelBadge, time, text);
    this.logList.prepend(item);

    while (this.logList.childElementCount > 30) {
      this.logList.lastElementChild?.remove();
    }
  }

  private createNavbar(appName: string, description: string): HTMLElement {
    const navbar = this.create("header", "navbar");
    const brand = this.create("div", "navbar__brand");
    const eyebrow = this.create("span", "navbar__eyebrow", "Plugin Demo");
    const title = this.create("h1", "navbar__title", appName);
    const copy = this.create("p", "navbar__description", description);
    brand.append(eyebrow, title, copy);

    const commandDeck = this.create("div", "command-strip");
    const commandDeckHeader = this.create("div", "command-strip__header");
    commandDeckHeader.append(this.create("span", "navbar__eyebrow", "Commands"));
    this.commandEmptyState = this.create(
      "p",
      "command-strip__empty",
      "Load a plugin to see commands here.",
    );
    this.commandBar = this.create("div", "command-bar");
    commandDeck.append(commandDeckHeader, this.commandEmptyState, this.commandBar);

    const controls = this.create("div", "navbar__controls");
    this.toggleLeftSidebarButton = this.createWorkbenchActionButton("Left", "Toggle left sidebar", () => {
      this.updateLayoutState({
        leftSidebarVisible: !this.layoutState.leftSidebarVisible,
      });
    });
    this.toggleBottomPanelButton = this.createWorkbenchActionButton("Panel", "Toggle bottom panel", () => {
      this.updateLayoutState({
        bottomPanelVisible: !this.layoutState.bottomPanelVisible,
      });
    });
    this.toggleRightSidebarButton = this.createWorkbenchActionButton("Right", "Toggle right sidebar", () => {
      this.updateLayoutState({
        rightSidebarVisible: !this.layoutState.rightSidebarVisible,
      });
    });
    this.splitEditorButton = this.createWorkbenchActionButton("Split", "Toggle split editor groups", () => {
      this.updateLayoutState({
        editorGroupCount: this.layoutState.editorGroupCount === 2 ? 1 : 2,
      });
    });
    controls.append(
      this.toggleLeftSidebarButton,
      this.toggleBottomPanelButton,
      this.toggleRightSidebarButton,
      this.splitEditorButton,
    );

    navbar.append(brand, commandDeck, controls);
    return navbar;
  }

  private createLeftSidebar(): HTMLElement {
    const sidebar = this.create("aside", "workbench-sidebar");
    const rail = this.create("div", "workbench-sidebar__rail");
    rail.append(
      this.createSidebarViewButton("EX", "Explorer", true),
      this.createSidebarViewButton("PL", "Plugins"),
    );

    const content = this.create("div", "workbench-sidebar__content");
    const header = this.create("div", "sidebar__header");
    const eyebrow = this.create("span", "sidebar__eyebrow", "Plugins");
    const title = this.create("h2", "sidebar__title", "Extension Catalog");
    const copy = this.create("p", "section-copy", "Load or unload plugins from this list.");
    header.append(eyebrow, title, copy);

    const extensionsSection = this.createSection(
      "Available Plugins",
      "Each plugin can add commands, state updates, and UI panels.",
    );
    this.pluginCatalog = this.create("div", "plugin-grid");
    extensionsSection.body.append(this.pluginCatalog);

    content.append(header, extensionsSection.element);
    sidebar.append(rail, content);
    return sidebar;
  }

  private createCenterStage(): HTMLDivElement {
    const centerStage = this.create("div", "workbench__center");
    const editorStage = this.create("section", "editor-stage");
    const editorHeader = this.create("div", "editor-stage__header");
    const editorTabs = this.create("div", "editor-tabs");
    editorTabs.append(this.createTab("Workspace", true));
    editorHeader.append(editorTabs);

    this.editorGroups = this.create("div", "editor-groups");
    this.editorGroups.append(this.createPrimaryEditorGroup(), this.createSecondaryEditorGroup());
    editorStage.append(editorHeader, this.editorGroups);

    this.bottomResizeHandle = this.createResizeHandle("horizontal", "Resize bottom panel");
    this.bottomPanel = this.createBottomPanel();
    centerStage.append(editorStage, this.bottomResizeHandle, this.bottomPanel);
    return centerStage;
  }

  private createPrimaryEditorGroup(): HTMLElement {
    const group = this.create("section", "editor-group");
    const header = this.create("div", "editor-group__header");
    const titleBlock = this.create("div", "editor-group__title-block");
    const title = this.create("h2", "section-title", "Editor Group 1");
    const copy = this.create("p", "section-copy", "Plugin panels appear here.");
    titleBlock.append(title, copy);
    header.append(titleBlock, this.create("span", "pill", "Primary"));

    const body = this.create("div", "editor-group__body");

    this.panelEmptyState = this.create("div", "panel-empty");
    const panelEmptyTitle = this.create("strong", "panel-empty__title", "No active editor contributions");
    const panelEmptyCopy = this.create("p", "muted", "Load a plugin to populate this area.");
    this.panelEmptyState.append(panelEmptyTitle, panelEmptyCopy);

    this.panelHost = this.create("div", "panel-host");
    body.append(this.panelEmptyState, this.panelHost);
    group.append(header, body);
    return group;
  }

  private createSecondaryEditorGroup(): HTMLElement {
    const group = this.create("section", "editor-group editor-group--secondary");
    const header = this.create("div", "editor-group__header");
    const titleBlock = this.create("div", "editor-group__title-block");
    const title = this.create("h2", "section-title", "Editor Group 2");
    const copy = this.create("p", "section-copy", "Optional second editor view.");
    titleBlock.append(title, copy);
    header.append(titleBlock, this.create("span", "pill", "Secondary"));

    const body = this.create("div", "editor-group__body");
    const placeholder = this.create("div", "editor-placeholder");
    placeholder.append(
      this.create("span", "sidebar__eyebrow", "Split view"),
      this.create("h3", "editor-welcome__title", "Second editor group"),
      this.create("p", "editor-welcome__copy", "Enable split mode when you need more space."),
    );
    body.append(placeholder);
    group.append(header, body);
    this.secondaryEditorGroup = group;
    return group;
  }

  private createBottomPanel(): HTMLElement {
    const panel = this.create("section", "bottom-panel");
    const header = this.create("div", "bottom-panel__header");
    const tabs = this.create("div", "bottom-panel__tabs");
    tabs.append(
      this.createBottomPanelTab("Output", true),
      this.createBottomPanelTab("Problems"),
      this.createBottomPanelTab("Terminal"),
    );
    header.append(tabs, this.create("span", "pill", "Activity log"));

    const body = this.create("div", "bottom-panel__body");
    body.append(
      this.create(
        "p",
        "section-copy",
        "Plugin lifecycle events and host logger messages converge here until dedicated output channels are introduced.",
      ),
    );
    this.logList = this.create("ul", "log-list");
    body.append(this.logList);
    panel.append(header, body);
    return panel;
  }

  private createRightSidebar(): HTMLElement {
    const sidebar = this.create("aside", "aux-sidebar");
    const header = this.create("div", "sidebar__header");
    const eyebrow = this.create("span", "sidebar__eyebrow", "Details");
    const title = this.create("h2", "sidebar__title", "Current Layout");
    const copy = this.create("p", "section-copy", "Quick summary of the active workspace layout.");
    header.append(eyebrow, title, copy);

    const metricsSection = this.createSection(
      "Layout",
      "Current editor and panel state.",
    );
    const groupMetric = this.createMetricRow("Editor groups", "1 group");
    const sidebarMetric = this.createMetricRow("Visible sidebars", "left + right");
    const panelMetric = this.createMetricRow("Bottom panel", "Visible");
    this.auxGroupCountItem = groupMetric.value;
    this.auxSidebarStateItem = sidebarMetric.value;
    this.auxPanelStateItem = panelMetric.value;
    metricsSection.body.append(groupMetric.element, sidebarMetric.element, panelMetric.element);

    sidebar.append(header, metricsSection.element);
    return sidebar;
  }

  private createStatusBar(): HTMLElement {
    const statusBar = this.create("footer", "status-bar");
    const statusLeft = this.create("div", "status-bar__group");
    statusLeft.append(
      this.create("span", "status-bar__item status-bar__item--emphasis", "Workbench ready"),
      this.create("span", "status-bar__item", "Browser-first IDE shell"),
      this.create("span", "status-bar__item", "Internal extension host"),
    );

    const statusRight = this.create("div", "status-bar__group");
    this.loadedCountItem = this.create("span", "status-bar__item", "0 plugins loaded");
    this.commandCountItem = this.create("span", "status-bar__item", "0 commands");
    this.panelCountItem = this.create("span", "status-bar__item", "0 panels");
    this.layoutCountItem = this.create("span", "status-bar__item", "single editor");
    statusRight.append(this.loadedCountItem, this.commandCountItem, this.panelCountItem, this.layoutCountItem);
    statusBar.append(statusLeft, statusRight);
    return statusBar;
  }

  private bindResizeHandles(): void {
    this.bindSidebarResize(this.leftResizeHandle, "left");
    this.bindSidebarResize(this.rightResizeHandle, "right");
    this.bindBottomPanelResize(this.bottomResizeHandle);
  }

  private bindSidebarResize(handle: HTMLDivElement, side: SidebarSide): void {
    const view = this.document.defaultView;

    if (!view) {
      return;
    }

    handle.addEventListener("pointerdown", (event: PointerEvent) => {
      event.preventDefault();

      const startX = event.clientX;
      const startWidth = side === "left" ? this.layoutState.leftSidebarWidth : this.layoutState.rightSidebarWidth;

      const onPointerMove = (moveEvent: PointerEvent): void => {
        const delta = side === "left" ? moveEvent.clientX - startX : startX - moveEvent.clientX;

        if (side === "left") {
          this.updateLayoutState({ leftSidebarWidth: startWidth + delta }, false);
          return;
        }

        this.updateLayoutState({ rightSidebarWidth: startWidth + delta }, false);
      };

      const onPointerUp = (): void => {
        view.removeEventListener("pointermove", onPointerMove);
        view.removeEventListener("pointerup", onPointerUp);
        this.layoutStorage.save(this.layoutState);
      };

      view.addEventListener("pointermove", onPointerMove);
      view.addEventListener("pointerup", onPointerUp);
    });
  }

  private bindBottomPanelResize(handle: HTMLDivElement): void {
    const view = this.document.defaultView;

    if (!view) {
      return;
    }

    handle.addEventListener("pointerdown", (event: PointerEvent) => {
      event.preventDefault();

      const startY = event.clientY;
      const startHeight = this.layoutState.bottomPanelHeight;

      const onPointerMove = (moveEvent: PointerEvent): void => {
        const delta = startY - moveEvent.clientY;
        this.updateLayoutState({ bottomPanelHeight: startHeight + delta }, false);
      };

      const onPointerUp = (): void => {
        view.removeEventListener("pointermove", onPointerMove);
        view.removeEventListener("pointerup", onPointerUp);
        this.layoutStorage.save(this.layoutState);
      };

      view.addEventListener("pointermove", onPointerMove);
      view.addEventListener("pointerup", onPointerUp);
    });
  }

  private updateLayoutState(nextState: Partial<WorkbenchLayoutState>, persist = true): void {
    this.layoutState = mergeWorkbenchLayoutState(this.layoutState, nextState);
    this.applyLayoutState(persist);
  }

  private applyLayoutState(persist = true): void {
    this.leftSidebar.hidden = !this.layoutState.leftSidebarVisible;
    this.leftResizeHandle.hidden = !this.layoutState.leftSidebarVisible;
    this.rightSidebar.hidden = !this.layoutState.rightSidebarVisible;
    this.rightResizeHandle.hidden = !this.layoutState.rightSidebarVisible;
    this.bottomPanel.hidden = !this.layoutState.bottomPanelVisible;
    this.bottomResizeHandle.hidden = !this.layoutState.bottomPanelVisible;
    this.secondaryEditorGroup.hidden = this.layoutState.editorGroupCount !== 2;

    const bodyColumns: string[] = [];

    if (this.layoutState.leftSidebarVisible) {
      bodyColumns.push(`${this.layoutState.leftSidebarWidth}px`, "10px");
    }

    bodyColumns.push("minmax(0, 1fr)");

    if (this.layoutState.rightSidebarVisible) {
      bodyColumns.push("10px", `${this.layoutState.rightSidebarWidth}px`);
    }

    this.workbenchBody.style.gridTemplateColumns = bodyColumns.join(" ");
    this.centerStage.style.gridTemplateRows = this.layoutState.bottomPanelVisible
      ? `minmax(0, 1fr) 10px ${this.layoutState.bottomPanelHeight}px`
      : "minmax(0, 1fr)";
    this.editorGroups.style.gridTemplateColumns =
      this.layoutState.editorGroupCount === 2 ? "minmax(0, 1fr) minmax(320px, 0.76fr)" : "minmax(0, 1fr)";

    this.refreshLayoutSummary();

    if (persist) {
      this.layoutStorage.save(this.layoutState);
    }
  }

  private refreshLayoutSummary(): void {
    const sidebars = [
      this.layoutState.leftSidebarVisible ? "left" : "",
      this.layoutState.rightSidebarVisible ? "right" : "",
    ].filter((value) => value.length > 0);

    this.auxGroupCountItem.textContent = this.layoutState.editorGroupCount === 2 ? "2 groups" : "1 group";
    this.auxSidebarStateItem.textContent = sidebars.length > 0 ? sidebars.join(" + ") : "hidden";
    this.auxPanelStateItem.textContent = this.layoutState.bottomPanelVisible
      ? `${this.layoutState.bottomPanelHeight}px high`
      : "hidden";
    this.layoutCountItem.textContent = this.layoutState.editorGroupCount === 2 ? "split editors" : "single editor";

    this.setWorkbenchActionState(this.toggleLeftSidebarButton, this.layoutState.leftSidebarVisible);
    this.setWorkbenchActionState(this.toggleBottomPanelButton, this.layoutState.bottomPanelVisible);
    this.setWorkbenchActionState(this.toggleRightSidebarButton, this.layoutState.rightSidebarVisible);
    this.setWorkbenchActionState(this.splitEditorButton, this.layoutState.editorGroupCount === 2);
  }

  private createSection(
    titleText: string,
    copyText: string,
    badgeText?: string,
  ): {
    element: HTMLElement;
    body: HTMLDivElement;
  } {
    const section = this.create("section", "section-card");
    const header = this.create("div", "section-card__header");
    const titleGroup = this.create("div", "section-card__title-group");
    const title = this.create("h2", "section-title", titleText);
    const copy = this.create("p", "section-copy", copyText);
    const body = this.create("div", "section-card__body");

    titleGroup.append(title, copy);
    header.append(titleGroup);

    if (badgeText) {
      header.append(this.create("span", "pill", badgeText));
    }

    section.append(header, body);
    return { element: section, body };
  }

  private createSidebarViewButton(shortLabel: string, description: string, active = false): HTMLButtonElement {
    const button = this.create(
      "button",
      active
        ? "workbench-sidebar__view-button workbench-sidebar__view-button--active"
        : "workbench-sidebar__view-button",
      shortLabel,
    );
    button.type = "button";
    button.setAttribute("aria-label", description);
    button.title = description;
    return button;
  }

  private createWorkbenchActionButton(label: string, title: string, onClick: () => void): HTMLButtonElement {
    const button = this.create("button", "workbench-action", label);
    button.type = "button";
    button.title = title;
    button.addEventListener("click", onClick);
    return button;
  }

  private setWorkbenchActionState(button: HTMLButtonElement, active: boolean): void {
    button.className = active ? "workbench-action workbench-action--active" : "workbench-action";
    button.setAttribute("aria-pressed", String(active));
  }

  private createResizeHandle(axis: "horizontal" | "vertical", label: string): HTMLDivElement {
    const handle = this.create(
      "div",
      axis === "vertical" ? "resize-handle resize-handle--vertical" : "resize-handle resize-handle--horizontal",
    );
    handle.setAttribute("role", "separator");
    handle.setAttribute("aria-label", label);
    return handle;
  }

  private createTab(label: string, active = false): HTMLSpanElement {
    return this.create("span", active ? "editor-tab editor-tab--active" : "editor-tab", label);
  }

  private createBottomPanelTab(label: string, active = false): HTMLSpanElement {
    return this.create("span", active ? "bottom-panel__tab bottom-panel__tab--active" : "bottom-panel__tab", label);
  }

  private createOverviewCard(titleText: string, copyText: string): HTMLDivElement {
    const card = this.create("div", "overview-card");
    const title = this.create("h2", "overview-card__title", titleText);
    const copy = this.create("p", "overview-card__copy", copyText);
    card.append(title, copy);
    return card;
  }

  private createCapabilityCard(titleText: string, copyText: string): HTMLDivElement {
    const card = this.create("div", "capability-card");
    const title = this.create("h3", "capability-card__title", titleText);
    const copy = this.create("p", "capability-card__copy", copyText);
    card.append(title, copy);
    return card;
  }

  private createMetricRow(
    labelText: string,
    valueText: string,
  ): {
    element: HTMLDivElement;
    value: HTMLElement;
  } {
    const row = this.create("div", "metric-row");
    const label = this.create("span", "metric-label", labelText);
    const value = this.create("strong", "metric-value", valueText);
    row.append(label, value);
    return { element: row, value };
  }

  private createTree(
    entries: ReadonlyArray<{
      label: string;
      depth: number;
      kind: "file" | "folder";
      active?: boolean;
    }>,
  ): HTMLDivElement {
    const tree = this.create("div", "tree");

    for (const entry of entries) {
      const row = this.create("div", entry.active ? "tree-row tree-row--active" : "tree-row", entry.label);
      row.style.setProperty("--tree-depth", String(entry.depth));
      row.dataset.icon = entry.kind === "folder" ? ">" : "*";
      tree.append(row);
    }

    return tree;
  }

  private refreshWorkbenchStats(): void {
    const loadedCount = [...this.pluginStates.values()].filter(Boolean).length;
    const commandCount = this.commandButtons.size;
    const panelCount = this.panels.size;

    this.loadedCountItem.textContent = `${loadedCount} plugin${loadedCount === 1 ? "" : "s"} loaded`;
    this.commandCountItem.textContent = `${commandCount} command${commandCount === 1 ? "" : "s"}`;
    this.panelCountItem.textContent = `${panelCount} panel${panelCount === 1 ? "" : "s"}`;
    this.commandEmptyState.hidden = commandCount > 0;
    this.panelEmptyState.hidden = panelCount > 0;
    this.refreshLayoutSummary();
  }

  private create<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
    className: string,
    textContent?: string,
  ): HTMLElementTagNameMap[K] {
    const element = this.document.createElement(tagName);

    if (className) {
      element.className = className;
    }

    if (textContent !== undefined) {
      element.textContent = textContent;
    }

    return element;
  }
}
