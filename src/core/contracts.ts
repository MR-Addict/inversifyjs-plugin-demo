import type { Container, ContainerModule } from "inversify";

export interface Disposable {
  dispose(): void;
}

export type Cleanup = Disposable | (() => void);

export interface PluginMeta {
  id: string;
  name: string;
  description: string;
}

export interface PluginCatalogEntry {
  meta: PluginMeta;
  load: () => Promise<{ default: PluginDefinition }>;
}

export interface CommandContribution {
  id: string;
  title: string;
  run: () => void;
}

export interface PluginPanelOptions {
  id: string;
  title: string;
  description: string;
}

export interface PluginPanel {
  readonly id: string;
  readonly element: HTMLElement;
  readonly body: HTMLElement;
  setStatus(text: string): void;
  destroy(): void;
}

export interface NoticeOptions {
  kind?: "info" | "success" | "warning";
  timeoutMs?: number;
}

export interface AppEvent<T = unknown> {
  type: string;
  payload: T;
  source: string;
  occurredAt: Date;
}

export interface CommandApi {
  register(command: CommandContribution): Disposable;
}

export interface UiApi {
  createPanel(options: PluginPanelOptions): PluginPanel;
  showNotice(message: string, options?: NoticeOptions): void;
}

export interface StateApi {
  get<T>(key: string, initialValue: T): T;
  set<T>(key: string, value: T): void;
  update<T>(key: string, initialValue: T, updater: (current: T) => T): T;
  subscribe<T>(key: string, listener: (value: T) => void): Disposable;
}

export interface EventApi {
  publish<T>(type: string, payload: T, source: string): void;
  subscribe<T>(type: string, handler: (event: AppEvent<T>) => void): Disposable;
}

export interface LoggerApi {
  info(message: string): void;
  warn(message: string): void;
}

export interface PluginContext {
  readonly appName: string;
  readonly container: Container;
  readonly commands: CommandApi;
  readonly ui: UiApi;
  readonly state: StateApi;
  readonly events: EventApi;
  readonly logger: LoggerApi;
}

export interface PluginDefinition {
  readonly meta: PluginMeta;
  readonly module?: ContainerModule;
  activate(ctx: PluginContext): Cleanup | void | Promise<Cleanup | void>;
  deactivate?(ctx: PluginContext): void | Promise<void>;
}
