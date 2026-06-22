import { inject, injectable } from "inversify";

import type {
  CommandContribution,
  Disposable,
  NoticeOptions,
  PluginMeta,
  PluginPanel,
  PluginPanelOptions,
  UiApi
} from "../contracts.js";
import { TYPES } from "../tokens.js";

@injectable()
export class AppShell implements UiApi {
  private readonly commandButtons = new Map<string, HTMLButtonElement>();
  private readonly panels = new Map<string, PluginPanel>();
  private readonly pluginStates = new Map<string, boolean>();
  private commandBar!: HTMLDivElement;
  private commandEmptyState!: HTMLParagraphElement;
  private logList!: HTMLUListElement;
  private noticeHost!: HTMLDivElement;
  private loadedCountItem!: HTMLSpanElement;
  private commandCountItem!: HTMLSpanElement;
  private panelCountItem!: HTMLSpanElement;
  private panelEmptyState!: HTMLDivElement;
  private panelHost!: HTMLDivElement;
  private pluginCatalog!: HTMLDivElement;

  public constructor(
    @inject(TYPES.Document) private readonly document: Document,
    @inject(TYPES.RootElement) private readonly root: HTMLElement
  ) {}

  public mount(appName: string, description: string): void {
    this.root.replaceChildren();
    this.commandButtons.clear();
    this.panels.clear();
    this.pluginStates.clear();

    const shell = this.create("div", "workbench");
    const titlebar = this.create("header", "titlebar");
    const titlebarBrand = this.create("div", "titlebar__brand");
    const eyebrow = this.create("span", "titlebar__eyebrow", "Extension Host Demo");
    const title = this.create("h1", "titlebar__title", appName);
    const copy = this.create("p", "titlebar__description", description);
    titlebarBrand.append(eyebrow, title, copy);

    const titlebarMeta = this.create("div", "titlebar__meta");
    titlebarMeta.append(
      this.create("span", "pill", "TypeScript host"),
      this.create("span", "pill", "Dynamic plugins"),
      this.create("span", "pill", "InversifyJS ctx")
    );
    titlebar.append(titlebarBrand, titlebarMeta);

    const frame = this.create("div", "workbench__frame");
    frame.append(this.createActivityBar());

    const sidebar = this.create("aside", "sidebar");
    const sidebarHeader = this.create("div", "sidebar__header");
    const sidebarEyebrow = this.create("span", "sidebar__eyebrow", "Explorer");
    const sidebarTitle = this.create("h2", "sidebar__title", "Plugin Workbench");
    const sidebarCopy = this.create(
      "p",
      "section-copy",
      "Load plugins like extensions. The host injects ctx services for commands, panels, events, shared state, and logging."
    );
    sidebarHeader.append(sidebarEyebrow, sidebarTitle, sidebarCopy);

    const guideSection = this.createSection(
      "Quick Start",
      "Use the same flow every time so the extension boundary stays obvious.",
      "3 steps"
    );
    const guideList = this.create("ol", "guide-list");
    guideList.append(
      this.create("li", "guide-list__item", "Load Greeter to publish greetings through shared host services."),
      this.create("li", "guide-list__item", "Load Dashboard to observe the same events and state without direct coupling."),
      this.create("li", "guide-list__item", "Trigger registered commands from the host toolbar to prove plugins can extend it.")
    );
    guideSection.body.append(guideList);

    const workspaceSection = this.createSection(
      "Workspace Files",
      "A simplified explorer view of the host application and plugin boundary.",
      "src/"
    );
    workspaceSection.body.append(
      this.createTree([
        { label: "src", depth: 0, kind: "folder" },
        { label: "core", depth: 1, kind: "folder" },
        { label: "services/app-shell.ts", depth: 2, kind: "file", active: true },
        { label: "plugin-catalog.ts", depth: 1, kind: "file" },
        { label: "plugins", depth: 1, kind: "folder" },
        { label: "greeter.plugin.ts", depth: 2, kind: "file" },
        { label: "dashboard.plugin.ts", depth: 2, kind: "file" }
      ])
    );

    const catalogSection = this.createSection(
      "Extensions",
      "Dynamic imports keep each plugin isolated until you explicitly load it.",
      "Runtime catalog"
    );
    this.pluginCatalog = this.create("div", "plugin-grid");
    catalogSection.body.append(this.pluginCatalog);

    sidebar.append(
      sidebarHeader,
      guideSection.element,
      workspaceSection.element,
      catalogSection.element
    );

    const editor = this.create("main", "editor");
    const editorTop = this.create("div", "editor__top");
    const editorTabs = this.create("div", "editor-tabs");
    editorTabs.append(
      this.createTab("host-workbench.ts", true),
      this.createTab("plugins.runtime.ts"),
      this.createTab("output.log")
    );
    const editorHint = this.create(
      "span",
      "editor__hint",
      "Context-aware extension host"
    );
    editorTop.append(editorTabs, editorHint);

    const editorCanvas = this.create("div", "editor__canvas");
    const overview = this.create("div", "overview-grid");
    overview.append(
      this.createOverviewCard(
        "Load Extensions",
        "Activate plugins on demand from the explorer instead of shipping everything eagerly."
      ),
      this.createOverviewCard(
        "Share Host Services",
        "Each plugin receives the same ctx contract for UI, commands, events, state, and logging."
      ),
      this.createOverviewCard(
        "Observe Collaboration",
        "Greeter publishes host events while Dashboard reacts in real time without importing it directly."
      )
    );

    const commandSection = this.createSection(
      "Command Palette",
      "Active plugins can register toolbar commands through ctx.commands.register(...).",
      "Live toolbar"
    );
    this.commandEmptyState = this.create(
      "p",
      "empty-state",
      "Load a plugin to expose host commands here."
    );
    this.commandBar = this.create("div", "command-bar");
    commandSection.body.append(this.commandEmptyState, this.commandBar);

    const panelSection = this.createSection(
      "Editor Group",
      "Panels created by plugins mount here with plain DOM APIs.",
      "Plugin panels"
    );
    this.panelEmptyState = this.create("div", "panel-empty");
    const panelEmptyTitle = this.create(
      "strong",
      "panel-empty__title",
      "No active plugin panels"
    );
    const panelEmptyCopy = this.create(
      "p",
      "muted",
      "Load Greeter first, then Dashboard, to watch plugins share state and events inside the workbench."
    );
    this.panelEmptyState.append(panelEmptyTitle, panelEmptyCopy);
    this.panelHost = this.create("div", "panel-host");
    panelSection.body.append(this.panelEmptyState, this.panelHost);

    const capabilitySection = this.createSection(
      "ctx API Surface",
      "Every plugin receives the same host contract, similar to an editor extension API.",
      "Stable contract"
    );
    const capabilityGrid = this.create("div", "capability-grid");
    capabilityGrid.append(
      this.createCapabilityCard("ctx.ui", "Create panels, notices, and shell-visible UI affordances."),
      this.createCapabilityCard("ctx.commands", "Register host commands that appear in the toolbar."),
      this.createCapabilityCard("ctx.events", "Publish and subscribe to host-wide domain events."),
      this.createCapabilityCard("ctx.state", "Read and react to shared host state without direct plugin imports."),
      this.createCapabilityCard("ctx.logger", "Write plugin-originated messages into the host output panel.")
    );
    capabilitySection.body.append(capabilityGrid);

    editorCanvas.append(
      overview,
      commandSection.element,
      panelSection.element,
      capabilitySection.element
    );

    const outputPanel = this.create("section", "output-panel");
    const outputHeader = this.create("div", "output-panel__header");
    const outputTitleGroup = this.create("div", "output-panel__title-group");
    const outputEyebrow = this.create("span", "output-panel__eyebrow", "Panel");
    const outputTitle = this.create("h2", "section-title", "Output");
    const outputCopy = this.create(
      "p",
      "section-copy",
      "Plugin lifecycle events and plugin-originated messages are appended here."
    );
    outputTitleGroup.append(outputEyebrow, outputTitle, outputCopy);
    outputHeader.append(outputTitleGroup, this.create("span", "pill", "Activity log"));
    this.logList = this.create("ul", "log-list");
    outputPanel.append(outputHeader, this.logList);

    editor.append(editorTop, editorCanvas, outputPanel);
    frame.append(sidebar, editor);

    const statusBar = this.create("footer", "status-bar");
    const statusLeft = this.create("div", "status-bar__group");
    statusLeft.append(
      this.create("span", "status-bar__item status-bar__item--emphasis", "Extension host ready"),
      this.create("span", "status-bar__item", "TypeScript + DOM runtime")
    );

    const statusRight = this.create("div", "status-bar__group");
    this.loadedCountItem = this.create("span", "status-bar__item", "0 plugins loaded");
    this.commandCountItem = this.create("span", "status-bar__item", "0 commands");
    this.panelCountItem = this.create("span", "status-bar__item", "0 panels");
    statusRight.append(
      this.loadedCountItem,
      this.commandCountItem,
      this.panelCountItem
    );
    statusBar.append(statusLeft, statusRight);

    this.noticeHost = this.create("div", "notice-stack");

    shell.append(titlebar, frame, statusBar);
    this.root.append(shell, this.noticeHost);
    this.refreshWorkbenchStats();
  }

  public addPluginCard(
    meta: PluginMeta,
    initialLoaded: boolean,
    onToggle: () => Promise<boolean>
  ): void {
    const card = this.create("article", "plugin-card");
    const header = this.create("div", "plugin-card__header");
    const titleBlock = this.create("div", "plugin-card__title-block");
    const title = this.create("h3", "plugin-card__title", meta.name);
    const pluginId = this.create("p", "plugin-card__id", meta.id);
    const status = this.create("span", "plugin-card__status");
    titleBlock.append(title, pluginId);
    header.append(titleBlock, status);

    const description = this.create(
      "p",
      "plugin-card__description",
      meta.description
    );
    const button = this.create("button", "button button--ghost", "Load plugin");
    button.type = "button";

    let loaded = initialLoaded;
    this.pluginStates.set(meta.id, loaded);

    const syncState = (): void => {
      this.pluginStates.set(meta.id, loaded);
      status.textContent = loaded ? "Loaded" : "Not loaded";
      status.className = loaded
        ? "plugin-card__status plugin-card__status--loaded"
        : "plugin-card__status";
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
      }
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

    const description = this.create(
      "p",
      "plugin-panel__description",
      options.description
    );
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
      }
    };

    this.panels.set(options.id, handle);
    this.refreshWorkbenchStats();
    return handle;
  }

  public showNotice(message: string, options: NoticeOptions = {}): void {
    const notice = this.create(
      "div",
      `notice notice--${options.kind ?? "info"}`,
      message
    );
    const timeoutMs = options.timeoutMs ?? 3200;

    this.noticeHost.prepend(notice);
    window.setTimeout(() => {
      notice.remove();
    }, timeoutMs);
  }

  public appendLog(level: "info" | "warn", message: string): void {
    const item = this.create("li", "log-item");
    const levelBadge = this.create(
      "span",
      level === "warn" ? "log-level log-level--warn" : "log-level",
      level
    );
    const time = this.create(
      "span",
      "log-time",
      new Date().toLocaleTimeString()
    );
    const text = this.create("span", "", message);

    item.append(levelBadge, time, text);
    this.logList.prepend(item);

    while (this.logList.childElementCount > 30) {
      this.logList.lastElementChild?.remove();
    }
  }

  private createSection(
    titleText: string,
    copyText: string,
    badgeText?: string
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

  private createActivityBar(): HTMLElement {
    const activityBar = this.create("nav", "activity-bar");

    activityBar.append(
      this.createActivityButton("EX", "Explorer", true),
      this.createActivityButton("PL", "Plugins"),
      this.createActivityButton("OUT", "Output")
    );

    return activityBar;
  }

  private createActivityButton(
    shortLabel: string,
    description: string,
    active = false
  ): HTMLButtonElement {
    const button = this.create(
      "button",
      active
        ? "activity-bar__button activity-bar__button--active"
        : "activity-bar__button",
      shortLabel
    );
    button.type = "button";
    button.setAttribute("aria-label", description);
    button.title = description;
    return button;
  }

  private createTab(label: string, active = false): HTMLSpanElement {
    return this.create(
      "span",
      active ? "editor-tab editor-tab--active" : "editor-tab",
      label
    );
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

  private createTree(
    entries: ReadonlyArray<{
      label: string;
      depth: number;
      kind: "file" | "folder";
      active?: boolean;
    }>
  ): HTMLDivElement {
    const tree = this.create("div", "tree");

    for (const entry of entries) {
      const row = this.create(
        "div",
        entry.active ? "tree-row tree-row--active" : "tree-row",
        entry.label
      );
      row.style.setProperty("--tree-depth", String(entry.depth));
      row.dataset.icon = entry.kind === "folder" ? "▸" : "•";
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
  }

  private create<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
    className: string,
    textContent?: string
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
