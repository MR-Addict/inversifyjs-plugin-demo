import { injectable } from "inversify";

import type { Disposable, StateApi } from "../contracts.js";

@injectable()
export class SharedState implements StateApi {
  private readonly listeners = new Map<string, Set<(value: unknown) => void>>();
  private readonly values = new Map<string, unknown>();

  public get<T>(key: string, initialValue: T): T {
    if (!this.values.has(key)) {
      this.values.set(key, initialValue);
    }

    return this.values.get(key) as T;
  }

  public set<T>(key: string, value: T): void {
    this.values.set(key, value);
    this.listeners.get(key)?.forEach((listener) => {
      listener(value);
    });
  }

  public update<T>(
    key: string,
    initialValue: T,
    updater: (current: T) => T
  ): T {
    const nextValue = updater(this.get(key, initialValue));
    this.set(key, nextValue);
    return nextValue;
  }

  public subscribe<T>(key: string, listener: (value: T) => void): Disposable {
    const wrapped = (value: unknown) => {
      listener(value as T);
    };

    const listenersForKey = this.listeners.get(key) ?? new Set();
    listenersForKey.add(wrapped);
    this.listeners.set(key, listenersForKey);

    return {
      dispose: () => {
        listenersForKey.delete(wrapped);

        if (listenersForKey.size === 0) {
          this.listeners.delete(key);
        }
      }
    };
  }
}
