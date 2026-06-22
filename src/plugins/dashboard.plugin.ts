import type { PluginDefinition } from "../core/contracts.js";
import {
  GREETING_COUNT_KEY,
  GREETING_EVENT,
  type GreetingPayload
} from "./greeting.shared.js";

const plugin: PluginDefinition = {
  meta: {
    id: "dashboard-plugin",
    name: "Dashboard Plugin",
    description:
      "Listens to host events and shared state so it can build a live activity feed."
  },
  activate(ctx) {
    const panel = ctx.ui.createPanel({
      id: "dashboard-panel",
      title: "Dashboard Plugin",
      description:
        "This plugin uses ctx.events, ctx.state, ctx.commands, and plain DOM APIs to build a live dashboard."
    });
    const doc = panel.body.ownerDocument;

    const intro = doc.createElement("p");
    intro.textContent =
      "Load the greeter plugin and send a few greetings. This dashboard subscribes to the host event bus and reacts in real time.";

    const totalMetric = doc.createElement("div");
    totalMetric.className = "metric-row";
    const totalLabel = doc.createElement("span");
    totalLabel.textContent = "Observed greeting count";
    const totalValue = doc.createElement("strong");
    totalValue.className = "metric-value";
    totalMetric.append(totalLabel, totalValue);

    const sourceMetric = doc.createElement("div");
    sourceMetric.className = "metric-row";
    const sourceLabel = doc.createElement("span");
    sourceLabel.textContent = "Latest event source";
    const sourceValue = doc.createElement("strong");
    sourceValue.className = "metric-value";
    sourceValue.textContent = "none";
    sourceMetric.append(sourceLabel, sourceValue);

    const actions = doc.createElement("div");
    actions.className = "button-row";
    const clearButton = doc.createElement("button");
    clearButton.type = "button";
    clearButton.className = "button button--ghost";
    clearButton.textContent = "Clear activity feed";
    actions.append(clearButton);

    const emptyState = doc.createElement("p");
    emptyState.className = "muted";
    emptyState.textContent = "Waiting for greeting events.";

    const feed = doc.createElement("ul");
    feed.className = "activity-list";

    const syncTotal = (total: number) => {
      totalValue.textContent = String(total);
      panel.setStatus(
        total === 0 ? "Waiting for the first greeting." : `Observed ${total} greetings.`
      );
    };

    const appendEvent = (payload: GreetingPayload, source: string, when: Date) => {
      emptyState.hidden = true;
      sourceValue.textContent = source;

      const item = doc.createElement("li");
      item.className = "activity-item";
      item.textContent = `${when.toLocaleTimeString()} - ${payload.message}`;
      feed.prepend(item);

      while (feed.childElementCount > 6) {
        feed.lastElementChild?.remove();
      }
    };

    const clearFeed = () => {
      feed.replaceChildren();
      emptyState.hidden = false;
      sourceValue.textContent = "none";
      panel.setStatus("Activity feed cleared.");
      ctx.logger.info(`${plugin.meta.name} cleared its feed.`);
      ctx.ui.showNotice("Dashboard feed cleared.");
    };

    const totalSubscription = ctx.state.subscribe<number>(
      GREETING_COUNT_KEY,
      syncTotal
    );
    const eventSubscription = ctx.events.subscribe<GreetingPayload>(
      GREETING_EVENT,
      (event) => {
        appendEvent(event.payload, event.source, event.occurredAt);
        ctx.logger.info(
          `${plugin.meta.name} observed greeting #${event.payload.total}.`
        );
      }
    );
    const command = ctx.commands.register({
      id: "dashboard-plugin.clear-feed",
      title: "Clear dashboard feed",
      run: clearFeed
    });

    clearButton.addEventListener("click", clearFeed);
    syncTotal(ctx.state.get<number>(GREETING_COUNT_KEY, 0));
    panel.body.append(intro, totalMetric, sourceMetric, actions, emptyState, feed);

    return {
      dispose: () => {
        clearButton.removeEventListener("click", clearFeed);
        command.dispose();
        eventSubscription.dispose();
        totalSubscription.dispose();
        panel.destroy();
      }
    };
  }
};

export default plugin;
