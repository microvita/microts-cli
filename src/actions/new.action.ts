import { intro, outro, spinner, text } from "@clack/prompts";
import { AbstractAction } from "./abstract.action";
import * as fs from "fs";
import { GenerateApp } from "../lib/utils/helper";

const existsDirectory = async (path: string): Promise<boolean> => {
  try {
    await fs.promises.access(path);
    const stats = await fs.promises.lstat(path);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
};

export class NewAction extends AbstractAction {
  public async handle() {
    await this.run();
  }

  private async run(): Promise<void> {
    intro("Welcome to MicroTS CLI!  🚀");

    const dirName = (await text({
      message: "What is the name of your project?",
      initialValue: "my-app",
      validate: (value: any) => {
        const regex = new RegExp("^[a-zA-Z-]+$");
        if (!value) {
          return "Directory name is required";
        } else if (!regex.test(value)) {
          return "Directory name many only contain letters and dashes";
        }
      },
    })) as string;

    const direExists = await existsDirectory(dirName);

    if (direExists) {
      outro(`Directory ${dirName} already exists 😬`);
      process.exit(1);
    }

    const sp = spinner();
    sp.start("Generating Micro TS Node Framework");

    await GenerateApp(dirName);

    sp.stop("Micro TS Web Framework generated! 🎉");

    outro("Let's start coding! 🚀");
  }
}
