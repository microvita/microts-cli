#!/usr/bin/env node

import { CommandLoader } from "./commands/loader.command";
import { INTROBANNER } from "./lib/ui";
import chalk from "chalk";

const { Command } = require("commander");
const figlet = require("figlet");

const program = new Command();
const intro = figlet.textSync(INTROBANNER);
console.log(chalk.blue(intro));

const bootstrap = async () => {
  program
    .version(
      require("../package.json").version,
      "-v, --version",
      "Output the current version"
    )
    .description(
      "That's @microts/cli for the managing microts-node web framework"
    )
    .usage("<command> [options]")
    .helpOption("-h, --help", "Output usage information.");

  await CommandLoader.load(program);

  await program.parseAsync(process.argv);

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
};

bootstrap();
