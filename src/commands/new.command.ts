import { Command } from "commander";
import { AbstractCommand } from "./abstract.command";

class NewCommand extends AbstractCommand {
  public load(program: Command) {
    program
      .command("init")
      .alias("new")
      .description("Generate Micro TS Application")
      .action(async () => {
        await this.action.handle();
      });
  }
}

module.exports = { NewCommand };
