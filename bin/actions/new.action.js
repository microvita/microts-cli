"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewAction = void 0;
const prompts_1 = require("@clack/prompts");
const abstract_action_1 = require("./abstract.action");
const fs = __importStar(require("fs"));
const helper_1 = require("../lib/utils/helper");
const existsDirectory = async (path) => {
    try {
        await fs.promises.access(path);
        const stats = await fs.promises.lstat(path);
        return stats.isDirectory();
    }
    catch (error) {
        return false;
    }
};
class NewAction extends abstract_action_1.AbstractAction {
    async handle() {
        await this.run();
    }
    async run() {
        (0, prompts_1.intro)("Welcome to MicroTS CLI!  🚀");
        const dirName = (await (0, prompts_1.text)({
            message: "What is the name of your project?",
            initialValue: "my-app",
            validate: (value) => {
                const regex = new RegExp("^[a-zA-Z-]+$");
                if (!value) {
                    return "Directory name is required";
                }
                else if (!regex.test(value)) {
                    return "Directory name many only contain letters and dashes";
                }
            },
        }));
        const direExists = await existsDirectory(dirName);
        if (direExists) {
            (0, prompts_1.outro)(`Directory ${dirName} already exists 😬`);
            process.exit(1);
        }
        const sp = (0, prompts_1.spinner)();
        sp.start("Generating Micro TS Node Framework");
        await (0, helper_1.GenerateApp)(dirName);
        sp.stop("Micro TS Web Framework generated! 🎉");
        (0, prompts_1.outro)("Let's start coding! 🚀");
    }
}
exports.NewAction = NewAction;
//# sourceMappingURL=new.action.js.map