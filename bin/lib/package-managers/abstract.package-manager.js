"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractPackageManager = void 0;
class AbstractPackageManager {
    runner;
    constructor(runner) {
        this.runner = runner;
    }
    async install(directory, packageManager) {
        // const spinner = ora({
        //     spinner: {
        //         interval: 120,
        //         frames: ['->->->->->', '->->->->->', '->->->->->', '->->->->->', '->->->->->', '->->->->->']
        //     },
        //     text: M
        // })
    }
}
exports.AbstractPackageManager = AbstractPackageManager;
//# sourceMappingURL=abstract.package-manager.js.map