import { inject, injectable } from "inversify";

import type { LoggerApi } from "../contracts.js";
import { TYPES } from "../tokens.js";
import { AppShell } from "./app-shell.js";

@injectable()
export class Logger implements LoggerApi {
  public constructor(
    @inject(TYPES.AppShell) private readonly shell: AppShell
  ) {}

  public info(message: string): void {
    this.shell.appendLog("info", message);
  }

  public warn(message: string): void {
    this.shell.appendLog("warn", message);
  }
}
