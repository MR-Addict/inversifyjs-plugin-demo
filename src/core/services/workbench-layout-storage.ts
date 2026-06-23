import { injectable } from "inversify";

export interface WorkbenchLayoutState {
  bottomPanelHeight: number;
  bottomPanelVisible: boolean;
  editorGroupCount: 1 | 2;
  leftSidebarVisible: boolean;
  leftSidebarWidth: number;
  rightSidebarVisible: boolean;
  rightSidebarWidth: number;
}

const STORAGE_KEY = "inversifyjs.workbench.layout";

const DEFAULT_LAYOUT_STATE: WorkbenchLayoutState = {
  bottomPanelHeight: 220,
  bottomPanelVisible: true,
  editorGroupCount: 1,
  leftSidebarVisible: true,
  leftSidebarWidth: 320,
  rightSidebarVisible: true,
  rightSidebarWidth: 300,
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function normalizeLayoutState(state: Partial<WorkbenchLayoutState>): WorkbenchLayoutState {
  return {
    bottomPanelHeight: clamp(state.bottomPanelHeight ?? DEFAULT_LAYOUT_STATE.bottomPanelHeight, 160, 420),
    bottomPanelVisible: state.bottomPanelVisible ?? DEFAULT_LAYOUT_STATE.bottomPanelVisible,
    editorGroupCount: state.editorGroupCount === 2 ? 2 : DEFAULT_LAYOUT_STATE.editorGroupCount,
    leftSidebarVisible: state.leftSidebarVisible ?? DEFAULT_LAYOUT_STATE.leftSidebarVisible,
    leftSidebarWidth: clamp(state.leftSidebarWidth ?? DEFAULT_LAYOUT_STATE.leftSidebarWidth, 260, 420),
    rightSidebarVisible: state.rightSidebarVisible ?? DEFAULT_LAYOUT_STATE.rightSidebarVisible,
    rightSidebarWidth: clamp(state.rightSidebarWidth ?? DEFAULT_LAYOUT_STATE.rightSidebarWidth, 260, 420),
  };
}

export function getDefaultWorkbenchLayoutState(): WorkbenchLayoutState {
  return { ...DEFAULT_LAYOUT_STATE };
}

export function mergeWorkbenchLayoutState(
  current: WorkbenchLayoutState,
  next: Partial<WorkbenchLayoutState>,
): WorkbenchLayoutState {
  return normalizeLayoutState({
    ...current,
    ...next,
  });
}

@injectable()
export class WorkbenchLayoutStorage {
  public load(): WorkbenchLayoutState {
    const storage = globalThis.localStorage;

    if (!storage) {
      return getDefaultWorkbenchLayoutState();
    }

    const rawState = storage.getItem(STORAGE_KEY);

    if (!rawState) {
      return getDefaultWorkbenchLayoutState();
    }

    try {
      const parsedState = JSON.parse(rawState) as Partial<WorkbenchLayoutState>;
      return normalizeLayoutState(parsedState);
    } catch {
      return getDefaultWorkbenchLayoutState();
    }
  }

  public save(state: WorkbenchLayoutState): void {
    const storage = globalThis.localStorage;

    if (!storage) {
      return;
    }

    storage.setItem(STORAGE_KEY, JSON.stringify(normalizeLayoutState(state)));
  }
}
