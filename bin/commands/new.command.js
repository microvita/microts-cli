"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_command_1 = require("./abstract.command");
class NewCommand extends abstract_command_1.AbstractCommand {
    load(program) {
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
//# sourceMappingURL=new.command.js.map