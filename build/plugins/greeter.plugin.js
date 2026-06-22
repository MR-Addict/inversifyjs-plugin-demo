import {
  ContainerModule,
  TYPES,
  inject,
  injectable
} from "../chunks/chunk-RYLKJ3SC.js";
import {
  GREETING_COUNT_KEY,
  GREETING_EVENT
} from "../chunks/chunk-EOXFAPIK.js";
import "../chunks/chunk-SK6HMZ5B.js";

// dist/plugins/greeter.plugin.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var GREETING_SERVICE = /* @__PURE__ */ Symbol.for("plugins.greeter.service");
var GreetingService = class GreetingService2 {
  constructor(state) {
    this.state = state;
    this.messages = [
      "Hello from the greeter plugin",
      "Plugins can collaborate through ctx",
      "InversifyJS keeps the host runtime decoupled"
    ];
  }
  composeGreeting() {
    const total = this.state.update(GREETING_COUNT_KEY, 0, (current) => {
      return current + 1;
    });
    const template = this.messages[(total - 1) % this.messages.length];
    return {
      message: `${template} #${total}`,
      total
    };
  }
};
GreetingService = __decorate([
  injectable(),
  __param(0, inject(TYPES.SharedState)),
  __metadata("design:paramtypes", [Object])
], GreetingService);
var greeterModule = new ContainerModule(({ bind }) => {
  bind(GREETING_SERVICE).to(GreetingService).inSingletonScope();
});
var plugin = {
  meta: {
    id: "greeter-plugin",
    name: "Greeter Plugin",
    description: "Uses a plugin-local service resolved from InversifyJS, then publishes host-level events through ctx."
  },
  module: greeterModule,
  activate(ctx) {
    const panel = ctx.ui.createPanel({
      id: "greeter-panel",
      title: "Greeter Plugin",
      description: "This plugin resolves a service from the container, updates shared host state, and emits greeting events."
    });
    const service = ctx.container.get(GREETING_SERVICE);
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
    hint.textContent = "Load the dashboard plugin as well to watch another plugin react to these host events.";
    const syncTotal = (total) => {
      metricValue.textContent = String(total);
      panel.setStatus(total === 0 ? "No greetings yet." : `Last total: ${total}`);
    };
    const sendGreeting = () => {
      const greeting = service.composeGreeting();
      ctx.events.publish(GREETING_EVENT, greeting, plugin.meta.id);
      ctx.ui.showNotice(greeting.message, { kind: "success" });
      ctx.logger.info(`${plugin.meta.name} sent: ${greeting.message}`);
    };
    const stateSubscription = ctx.state.subscribe(GREETING_COUNT_KEY, syncTotal);
    const command = ctx.commands.register({
      id: "greeter-plugin.send",
      title: "Send greeting",
      run: sendGreeting
    });
    sendButton.addEventListener("click", sendGreeting);
    syncTotal(ctx.state.get(GREETING_COUNT_KEY, 0));
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
var greeter_plugin_default = plugin;
export {
  greeter_plugin_default as default
};
