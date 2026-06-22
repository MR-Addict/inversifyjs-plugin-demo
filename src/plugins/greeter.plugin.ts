import { ContainerModule, inject, injectable } from "inversify";
import type { StateApi } from "../core/contracts.js";

import type { PluginDefinition } from "../core/contracts.js";
import { TYPES } from "../core/tokens.js";
import {
  GREETING_COUNT_KEY,
  GREETING_EVENT,
  type GreetingPayload
} from "./greeting.shared.js";

const GREETING_SERVICE = Symbol.for("plugins.greeter.service");

@injectable()
class GreetingService {
  private readonly messages = [
    "Hello from the greeter plugin",
    "Plugins can collaborate through ctx",
    "InversifyJS keeps the host runtime decoupled"
  ];

  public constructor(
    @inject(TYPES.SharedState) private readonly state: StateApi
  ) {}

  public composeGreeting(): GreetingPayload {
    const total = this.state.update<number>(GREETING_COUNT_KEY, 0, (current) => {
      return current + 1;
    });
    const template = this.messages[(total - 1) % this.messages.length];

    return {
      message: `${template} #${total}`,
      total
    };
  }
}

const greeterModule = new ContainerModule(({ bind }) => {
  bind<GreetingService>(GREETING_SERVICE).to(GreetingService).inSingletonScope();
});

const plugin: PluginDefinition = {
  meta: {
    id: "greeter-plugin",
    name: "Greeter Plugin",
    description:
      "Uses a plugin-local service resolved from InversifyJS, then publishes host-level events through ctx."
  },
  module: greeterModule,
  activate(ctx) {
    const panel = ctx.ui.createPanel({
      id: "greeter-panel",
      title: "Greeter Plugin",
      description:
        "This plugin resolves a service from the container, updates shared host state, and emits greeting events."
    });
    const service = ctx.container.get<GreetingService>(GREETING_SERVICE);
    const doc = panel.body.ownerDocument;

    const intro = doc.createElement("p");
    intro.textContent = `${ctx.appName} passes a ctx object into this plugin so it can use shared services without owning the app shell.`;

    const metricRow = doc.createElement("div");
    metricRow.className = "metric-row";
    const metricLabel = doc.createElement("span");
    metricLabel.textContent = "Total greetings sent";
    const metricValue = doc.createElement("strong");
    metricValue.className = "metric-value";
    metricRow.append(metricLabel, metricValue);

    const buttonRow = doc.createElement("div");
    buttonRow.className = "button-row";
    const sendButton = doc.createElement("button");
    sendButton.type = "button";
    sendButton.className = "button button--primary";
    sendButton.textContent = "Send greeting";
    buttonRow.append(sendButton);

    const hint = doc.createElement("p");
    hint.className = "muted";
    hint.textContent =
      "Load the dashboard plugin as well to watch another plugin react to these host events.";

    const syncTotal = (total: number) => {
      metricValue.textContent = String(total);
      panel.setStatus(total === 0 ? "No greetings yet." : `Last total: ${total}`);
    };

    const sendGreeting = () => {
      const greeting = service.composeGreeting();
      ctx.events.publish<GreetingPayload>(
        GREETING_EVENT,
        greeting,
        plugin.meta.id
      );
      ctx.ui.showNotice(greeting.message, { kind: "success" });
      ctx.logger.info(`${plugin.meta.name} sent: ${greeting.message}`);
    };

    const stateSubscription = ctx.state.subscribe<number>(
      GREETING_COUNT_KEY,
      syncTotal
    );
    const command = ctx.commands.register({
      id: "greeter-plugin.send",
      title: "Send greeting",
      run: sendGreeting
    });

    sendButton.addEventListener("click", sendGreeting);
    syncTotal(ctx.state.get<number>(GREETING_COUNT_KEY, 0));
    panel.body.append(intro, metricRow, buttonRow, hint);

    return {
      dispose: () => {
        sendButton.removeEventListener("click", sendGreeting);
        command.dispose();
        stateSubscription.dispose();
        panel.destroy();
      }
    };
  }
};

export default plugin;
