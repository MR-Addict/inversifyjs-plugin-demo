# InversifyJS Plugin Playground

A small browser demo that shows how to build a plugin-capable app with:

- **InversifyJS** for core service wiring and plugin-local services
- **TypeScript** for contracts and type-safe plugin APIs
- **Document API** for rendering everything without any UI framework

## Run the demo

```bash
npm install
npm run build
npm run serve
```

Then open `http://localhost:4173`.

The browser-ready assets are written to `build/`. The TypeScript compiler output in `dist/` remains an intermediate step so decorator metadata is preserved for Inversify.

## What the demo shows

1. The host app exposes a typed `ctx` object to every plugin.
2. Plugins are loaded dynamically with `import()`.
3. The build emits a separate browser module for each `*.plugin.ts` file.
4. A plugin can optionally export an Inversify `ContainerModule`.
5. Plugins use `ctx.ui`, `ctx.commands`, `ctx.state`, `ctx.events`, and `ctx.logger` to implement their behavior.

## Project structure

```text
src/
  core/
    contracts.ts          # Plugin contracts and ctx API
    tokens.ts             # Inversify service identifiers
    services/
      app-shell.ts        # DOM-based host shell
      command-registry.ts
      event-bus.ts
      logger.ts
      plugin-manager.ts
      shared-state.ts
  plugins/
    greeting.shared.ts    # Shared event + state keys
    greeter.plugin.ts     # Plugin with a plugin-local service
    dashboard.plugin.ts   # Plugin that reacts to host events/state
  plugin-catalog.ts       # Runtime plugin catalog and importers
  main.ts                 # App bootstrap
```

## How plugin loading works

Each catalog entry contains metadata plus a dynamic importer:

```ts
{
  meta: { id: "greeter-plugin", name: "Greeter Plugin", description: "..." },
  load: async () => import("./plugins/greeter.plugin.js")
}
```

When a plugin is loaded, the host:

1. imports the plugin module;
2. loads its optional `ContainerModule` into the app container;
3. calls `plugin.activate(ctx)`;
4. keeps the returned cleanup handle so it can unload the plugin later.

During `npm run build`, the app bundle is written to `build/main.js` and each plugin entry is emitted under `build/plugins/`. The browser only fetches a plugin module when its catalog entry is loaded.

## The `ctx` API

Plugins receive a host context with these capabilities:

- `ctx.ui.createPanel(...)`
- `ctx.ui.showNotice(...)`
- `ctx.commands.register(...)`
- `ctx.state.get/set/update/subscribe(...)`
- `ctx.events.publish/subscribe(...)`
- `ctx.logger.info/warn(...)`

That keeps plugins productive without giving them direct ownership of the application shell.

## Adding a new plugin

1. Create `src/plugins/your-plugin.plugin.ts`.
2. Export a default `PluginDefinition`.
3. Optionally attach a `ContainerModule` if the plugin needs its own injectable services.
4. Register it in `src/plugin-catalog.ts`.
