import { AbstractAction } from "./abstract.action";
import chalk from "chalk";
import { platform, release } from "os";
import osName from "../lib/utils/os-info.util";
import { readFileSync } from "fs";
import { join } from "path";

export class InfoAction extends AbstractAction {
  public async handle() {
    await this.displaySystemInformation();
    await this.displayMicroInformation();
  }

  private async displaySystemInformation(): Promise<void> {
    console.info(chalk.green("[System Information]"));
    console.info(
      "OS Version     :",
      chalk.blue(osName(platform(), release()), release())
    );
    console.info("NodeJS Version :", chalk.blue(process.version));
  }

  async displayMicroInformation(): Promise<void> {
    this.displayCliVersion();
  }

  displayCliVersion(): void {
    console.info(chalk.green("[MicroTS CLI]"));
    console.info(
      "MicroTS CLI Version : ",
      chalk.blue(
        JSON.parse(readFileSync(join(__dirname, "../package.json")).toString())
          .version
      ),
      "\n"
    );
  }
}
