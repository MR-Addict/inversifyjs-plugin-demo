import type { PluginCatalogEntry } from "./core/contracts.js";

export const pluginCatalog: PluginCatalogEntry[] = [
  {
    meta: {
      id: "greeter-plugin",
      name: "Greeter Plugin",
      description:
        "Publishes greeting events, exposes a toolbar command, and updates shared state."
    },
    load: async () => import("./plugins/greeter.plugin.js")
  },
  {
    meta: {
      id: "dashboard-plugin",
      name: "Dashboard Plugin",
      description:
        "Subscribes to host events and shared state so it can render a live activity dashboard."
    },
    load: async () => import("./plugins/dashboard.plugin.js")
  }
];
