import { inject, injectable } from "inversify";

import type { CommandApi, CommandContribution, Disposable } from "../contracts.js";
import { TYPES } from "../tokens.js";
import { AppShell } from "./app-shell.js";

@injectable()
export class CommandRegistry implements CommandApi {
  public constructor(
    @inject(TYPES.AppShell) private readonly shell: AppShell
  ) {}

  public register(command: CommandContribution): Disposable {
    return this.shell.addCommand(command);
  }
}
