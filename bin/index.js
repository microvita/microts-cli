#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();

program
  .version("1.0.0")
  .description("That's my CLI for the @microts/cli")
  .parse();

program
  .command("intro")
  .description("Just says hello")
  .action(() => {
    console.log("Hello :)");
  });

program
  .command("hello <name>")
  .description("Say hello to someone")
  .action((name) => {
    console.log(`Hello, ${name}!`);
  });

program.parse(process.argv);
