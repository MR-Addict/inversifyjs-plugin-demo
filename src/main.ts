import "reflect-metadata";
import { Container } from "inversify";

import { APP_DESCRIPTION, APP_NAME } from "./app-config.js";
import { AppShell } from "./core/services/app-shell.js";
import { CommandRegistry } from "./core/services/command-registry.js";
import { EventBus } from "./core/services/event-bus.js";
import { Logger } from "./core/services/logger.js";
import { PluginManager } from "./core/services/plugin-manager.js";
import { SharedState } from "./core/services/shared-state.js";
import { TYPES } from "./core/tokens.js";
import { pluginCatalog } from "./plugin-catalog.js";

const root = document.getElementById("app");

if (!(root instanceof HTMLElement)) {
  throw new Error('Expected a root element with id "app".');
}

const container = new Container();
container.bind<Container>(TYPES.Container).toConstantValue(container);
container.bind<Document>(TYPES.Document).toConstantValue(document);
container.bind<HTMLElement>(TYPES.RootElement).toConstantValue(root);
container.bind<AppShell>(TYPES.AppShell).to(AppShell).inSingletonScope();
container.bind<CommandRegistry>(TYPES.CommandRegistry).to(CommandRegistry).inSingletonScope();
container.bind<SharedState>(TYPES.SharedState).to(SharedState).inSingletonScope();
container.bind<EventBus>(TYPES.EventBus).to(EventBus).inSingletonScope();
container.bind<Logger>(TYPES.Logger).to(Logger).inSingletonScope();
container.bind<PluginManager>(TYPES.PluginManager).to(PluginManager).inSingletonScope();

const shell = container.get<AppShell>(TYPES.AppShell);
shell.mount(APP_NAME, APP_DESCRIPTION);
shell.appendLog("info", "Extension host bootstrapped. Load Greeter, then Dashboard, to watch plugins collaborate.");

const pluginManager = container.get<PluginManager>(TYPES.PluginManager);

for (const entry of pluginCatalog) {
  shell.addPluginCard(entry.meta, pluginManager.isLoaded(entry.meta.id), async () => {
    return pluginManager.toggle(entry);
  });
}

shell.showNotice("Start with Greeter, then load Dashboard to see shared state and events in action.", {
  kind: "info",
  timeoutMs: 4500,
});
