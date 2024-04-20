"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandLoader = void 0;
const chalk_1 = __importDefault(require("chalk"));
const ui_1 = require("../lib/ui");
const { InfoCommand } = require("../commands/info.command");
const { InfoAction } = require("../actions/info.action");
const { NewCommand } = require("../commands/new.command");
const { NewAction } = require("../actions/new.action");
class CommandLoader {
    static async load(program) {
        new InfoCommand(new InfoAction()).load(program);
        new NewCommand(new NewAction()).load(program);
        this.handleInvalidCommand(program);
    }
    static handleInvalidCommand(program) {
        program.on("command:*", () => {
            console.error(`\n${ui_1.ERROR_PREFIX} Invalid command: ${chalk_1.default.red("%s")}`, program.args.join(" "));
            console.log(`See ${chalk_1.default.red("--help")} for a list of available commands.\n`);
            process.exit(1);
        });
    }
}
exports.CommandLoader = CommandLoader;
//# sourceMappingURL=loader.command.js.map