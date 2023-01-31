"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const A3Session_1 = __importDefault(require("../../classes/A3Session"));
const canvas_1 = __importDefault(require("../../classes/canvas"));
const gameTracker_1 = __importDefault(require("../../classes/gameTracker"));
const INIparser_1 = __importDefault(require("../../classes/INIparser"));
const snapshot_1 = __importDefault(require("../../classes/snapshot"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function newGame(folder) {
    const mapsFolder = path_1.default.join(__dirname, "..", "..", "..", "..", "..", "..", "maps");
    const knownMaps = fs_1.default.readdirSync(mapsFolder);
    INIparser_1.default.clearIniFile(folder, "A3ToDJS_commandsIn");
    const snapshot = snapshot_1.default.getCurrent(folder);
    const sessionInfo = new A3Session_1.default(folder);
    let map = sessionInfo.map;
    const knownMap = knownMaps.indexOf(map) >= 0;
    if (!knownMap) {
        map = "VR";
    }
    const cnvsX = new canvas_1.default(map);
    gameTracker_1.default.stateToProccess(sessionInfo, snapshot);
    // sessionInfo.resetStats();
    return { snapshot, sessionInfo, cnvsX, knownMap };
}
exports.default = newGame;
;
