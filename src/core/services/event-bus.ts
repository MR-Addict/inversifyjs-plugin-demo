import { injectable } from "inversify";

import type { AppEvent, Disposable, EventApi } from "../contracts.js";

@injectable()
export class EventBus implements EventApi {
  private readonly listeners = new Map<
    string,
    Set<(event: AppEvent<unknown>) => void>
  >();

  public publish<T>(type: string, payload: T, source: string): void {
    const event: AppEvent<T> = {
      type,
      payload,
      source,
      occurredAt: new Date()
    };

    this.listeners.get(type)?.forEach((listener) => {
      listener(event as AppEvent<unknown>);
    });
  }

  public subscribe<T>(
    type: string,
    handler: (event: AppEvent<T>) => void
  ): Disposable {
    const wrapped = (event: AppEvent<unknown>) => {
      handler(event as AppEvent<T>);
    };

    const listenersForType = this.listeners.get(type) ?? new Set();
    listenersForType.add(wrapped);
    this.listeners.set(type, listenersForType);

    return {
      dispose: () => {
        listenersForType.delete(wrapped);

        if (listenersForType.size === 0) {
          this.listeners.delete(type);
        }
      }
    };
  }
}
