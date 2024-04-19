import { Command } from "commander";
const AbstractCommand = require("./abstract.command").AbstractCommand;

class InfoCommand extends AbstractCommand {
  load(program: Command) {
    program
      .command("info")
      .alias("i")
      .description("Display MicroTS Project details.")
      .action(async () => {
        await this.action.handle();
      });
  }
}

module.exports = { InfoCommand };
