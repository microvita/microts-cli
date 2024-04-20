"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommand = require("./abstract.command").AbstractCommand;
class InfoCommand extends AbstractCommand {
    load(program) {
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
//# sourceMappingURL=info.command.js.map