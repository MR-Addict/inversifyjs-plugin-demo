import { inject, injectable } from "inversify";
import type { Container, ContainerModule } from "inversify";

import { APP_NAME } from "../../app-config.js";
import type {
  Cleanup,
  Disposable,
  PluginCatalogEntry,
  PluginContext,
  PluginDefinition
} from "../contracts.js";
import { TYPES } from "../tokens.js";
import { AppShell } from "./app-shell.js";
import { CommandRegistry } from "./command-registry.js";
import { EventBus } from "./event-bus.js";
import { Logger } from "./logger.js";
import { SharedState } from "./shared-state.js";

interface LoadedPlugin {
  cleanup?: Disposable;
  definition: PluginDefinition;
  module?: ContainerModule;
}

@injectable()
export class PluginManager {
  private readonly loadedPlugins = new Map<string, LoadedPlugin>();
  private readonly ctx: PluginContext;

  public constructor(
    @inject(TYPES.Container) private readonly container: Container,
    @inject(TYPES.AppShell) private readonly shell: AppShell,
    @inject(TYPES.CommandRegistry) private readonly commands: CommandRegistry,
    @inject(TYPES.SharedState) private readonly state: SharedState,
    @inject(TYPES.EventBus) private readonly events: EventBus,
    @inject(TYPES.Logger) private readonly logger: Logger
  ) {
    this.ctx = {
      appName: APP_NAME,
      container: this.container,
      commands: this.commands,
      ui: this.shell,
      state: this.state,
      events: this.events,
      logger: this.logger
    };
  }

  public isLoaded(pluginId: string): boolean {
    return this.loadedPlugins.has(pluginId);
  }

  public async toggle(entry: PluginCatalogEntry): Promise<boolean> {
    return this.isLoaded(entry.meta.id)
      ? this.unload(entry.meta.id)
      : this.load(entry);
  }

  private async load(entry: PluginCatalogEntry): Promise<boolean> {
    if (this.isLoaded(entry.meta.id)) {
      return true;
    }

    let definition: PluginDefinition;

    try {
      definition = (await entry.load()).default;
    } catch (error) {
      this.reportError(entry.meta.id, "import", error);
      return false;
    }

    if (definition.meta.id !== entry.meta.id) {
      this.reportError(
        entry.meta.id,
        "load",
        new Error(
          `Catalog id "${entry.meta.id}" does not match plugin id "${definition.meta.id}".`
        )
      );
      return false;
    }

    try {
      if (definition.module) {
        this.container.load(definition.module);
      }

      const cleanup = await definition.activate(this.ctx);
      this.loadedPlugins.set(entry.meta.id, {
        cleanup: this.normalizeCleanup(cleanup),
        definition,
        module: definition.module
      });

      this.logger.info(`Loaded plugin "${definition.meta.name}".`);
      this.shell.showNotice(`Loaded ${definition.meta.name}.`, {
        kind: "success"
      });
      return true;
    } catch (error) {
      if (definition.module) {
        try {
          this.container.unload(definition.module);
        } catch (unloadError) {
          this.reportError(entry.meta.id, "rollback", unloadError);
        }
      }

      this.reportError(entry.meta.id, "activate", error);
      return false;
    }
  }

  private async unload(pluginId: string): Promise<boolean> {
    const loadedPlugin = this.loadedPlugins.get(pluginId);

    if (!loadedPlugin) {
      return false;
    }

    let hasError = false;

    if (loadedPlugin.cleanup) {
      try {
        loadedPlugin.cleanup.dispose();
      } catch (error) {
        hasError = true;
        this.reportError(pluginId, "cleanup", error);
      }
    }

    if (loadedPlugin.definition.deactivate) {
      try {
        await loadedPlugin.definition.deactivate(this.ctx);
      } catch (error) {
        hasError = true;
        this.reportError(pluginId, "deactivate", error);
      }
    }

    if (loadedPlugin.module) {
      try {
        this.container.unload(loadedPlugin.module);
      } catch (error) {
        hasError = true;
        this.reportError(pluginId, "unload", error);
      }
    }

    if (hasError) {
      return true;
    }

    this.loadedPlugins.delete(pluginId);
    this.logger.info(`Unloaded plugin "${loadedPlugin.definition.meta.name}".`);
    this.shell.showNotice(`Unloaded ${loadedPlugin.definition.meta.name}.`);
    return false;
  }

  private normalizeCleanup(cleanup: Cleanup | void): Disposable | undefined {
    if (!cleanup) {
      return undefined;
    }

    if (typeof cleanup === "function") {
      return { dispose: cleanup };
    }

    return cleanup;
  }

  private reportError(pluginId: string, phase: string, error: unknown): void {
    const details =
      error instanceof Error ? error.message : `Unknown error: ${String(error)}`;
    this.logger.warn(`Plugin "${pluginId}" failed during ${phase}: ${details}`);
    this.shell.showNotice(
      `Plugin "${pluginId}" failed during ${phase}: ${details}`,
      {
        kind: "warning",
        timeoutMs: 5000
      }
    );
    console.error(error);
  }
}
