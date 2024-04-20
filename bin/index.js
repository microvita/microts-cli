#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loader_command_1 = require("./commands/loader.command");
const ui_1 = require("./lib/ui");
const chalk_1 = __importDefault(require("chalk"));
const { Command } = require("commander");
const figlet = require("figlet");
const program = new Command();
const intro = figlet.textSync(ui_1.INTROBANNER);
console.log(chalk_1.default.blue(intro));
const bootstrap = async () => {
    program
        .version(require("../package.json").version, "-v, --version", "Output the current version")
        .description("That's @microts/cli for the managing microts-node web framework")
        .usage("<command> [options]")
        .helpOption("-h, --help", "Output usage information.");
    await loader_command_1.CommandLoader.load(program);
    await program.parseAsync(process.argv);
    if (!process.argv.slice(2).length) {
        program.outputHelp();
    }
};
bootstrap();
//# sourceMappingURL=index.js.map