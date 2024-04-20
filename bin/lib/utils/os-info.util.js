"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function osName(platform, release) {
    switch (platform) {
        case "darwin":
            return Number(release.split(".")[0]) > 15 ? "macOs" : "OS X";
        case "linux":
            return "Linux";
        case "win32":
            return "Windows";
        case "freebsd":
            return "FreeBSD";
        case "openbsd":
            return "OpenBSD";
        case "sunos":
            return "Solaris";
        case "android":
            return platform;
    }
}
exports.default = osName;
//# sourceMappingURL=os-info.util.js.map