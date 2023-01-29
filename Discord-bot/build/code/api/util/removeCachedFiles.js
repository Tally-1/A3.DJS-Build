"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFilesInFolder = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function removeCachedFiles() {
    const mapsFolder = path_1.default.join(".", "maps");
    const mapFolders = fs_1.default.readdirSync(mapsFolder);
    let filesRemoved = 0;
    for (const folder of mapFolders) {
        const cacheFolder = path_1.default.join(".", "maps", folder, "cache");
        const cacheFolders = fs_1.default.readdirSync(cacheFolder);
        for (const fldr of cacheFolders) {
            const pth = path_1.default.join(".", "maps", folder, "cache", fldr);
            filesRemoved = deleteFilesInFolder(pth, filesRemoved);
        }
        ;
    }
    ;
    if (filesRemoved > 0) {
        console.log("Removed " + filesRemoved + " cached file(s)");
    }
    ;
}
exports.default = removeCachedFiles;
;
function deleteFilesInFolder(folder, filesRemoved) {
    const files = fs_1.default.readdirSync(folder);
    for (const file of files) {
        const dir = path_1.default.join(".", folder, file);
        fs_1.default.unlinkSync(dir);
        filesRemoved++;
    }
    ;
    return filesRemoved;
}
exports.deleteFilesInFolder = deleteFilesInFolder;
;
