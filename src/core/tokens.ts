export const TYPES = {
  AppShell: Symbol.for("AppShell"),
  CommandRegistry: Symbol.for("CommandRegistry"),
  Container: Symbol.for("Container"),
  Document: Symbol.for("Document"),
  EventBus: Symbol.for("EventBus"),
  Logger: Symbol.for("Logger"),
  PluginManager: Symbol.for("PluginManager"),
  RootElement: Symbol.for("RootElement"),
  SharedState: Symbol.for("SharedState")
} as const;
