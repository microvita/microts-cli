"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoAction = void 0;
const abstract_action_1 = require("./abstract.action");
const chalk_1 = __importDefault(require("chalk"));
const os_1 = require("os");
const os_info_util_1 = __importDefault(require("../lib/utils/os-info.util"));
const fs_1 = require("fs");
const path_1 = require("path");
class InfoAction extends abstract_action_1.AbstractAction {
    async handle() {
        await this.displaySystemInformation();
        await this.displayMicroInformation();
    }
    async displaySystemInformation() {
        console.info(chalk_1.default.green("[System Information]"));
        console.info("OS Version     :", chalk_1.default.blue((0, os_info_util_1.default)((0, os_1.platform)(), (0, os_1.release)()), (0, os_1.release)()));
        console.info("NodeJS Version :", chalk_1.default.blue(process.version));
    }
    async displayMicroInformation() {
        this.displayCliVersion();
    }
    displayCliVersion() {
        console.info(chalk_1.default.green("[MicroTS CLI]"));
        console.info("MicroTS CLI Version : ", chalk_1.default.blue(JSON.parse((0, fs_1.readFileSync)((0, path_1.join)(__dirname, "../package.json")).toString())
            .version), "\n");
    }
}
exports.InfoAction = InfoAction;
//# sourceMappingURL=info.action.js.map