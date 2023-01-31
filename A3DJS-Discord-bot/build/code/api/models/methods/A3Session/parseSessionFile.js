"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const INIparser_1 = __importDefault(require("../../classes/INIparser"));
function parseSessionFile() {
    const string = fs_1.default.readFileSync(this.sessionFile, "utf8");
    const pString = INIparser_1.default.parseINIString(string);
    const object = pString.A3ToDJS_sessionInfo;
    //add a function for this.
    const map = object.map.substring(2, object.map.length - 2).toLowerCase();
    const serverName = object.serverName.substring(2, object.serverName.length - 2);
    const mission = object.mission.substring(2, object.mission.length - 2);
    const updateFrequency = +JSON.parse(object.updateFreq);
    const sessionTime = object.session;
    const version = +JSON.parse(object.version);
    const focusType = +JSON.parse(object.focusType);
    const focusEnemy = JSON.parse(JSON.parse(object.focusEnemy));
    const mapsFolder = path_1.default.join(__dirname, "..", "..", "..", "..", "..", "..", "maps");
    let dataPath = path_1.default.join(mapsFolder, map, "mapData.json");
    if (!fs_1.default.existsSync(dataPath)) {
        dataPath = path_1.default.join(mapsFolder, "VR", "mapData.json");
    }
    ;
    const data = fs_1.default.readFileSync(dataPath);
    const mapData = JSON.parse(data);
    const parsedData = {
        updateFrequency: updateFrequency,
        sessionName: sessionTime,
        map: map,
        mapData: mapData,
        focusType: focusType,
        focusEnemy: focusEnemy,
        serverName: serverName,
        mission: mission,
        version: version
    };
    return parsedData;
}
exports.default = parseSessionFile;
