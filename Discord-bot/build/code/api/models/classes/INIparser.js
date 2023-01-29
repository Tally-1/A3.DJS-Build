"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cleanString_1 = __importDefault(require("../methods/INIparser/cleanString"));
const clearIniFile_1 = __importDefault(require("../methods/INIparser/clearIniFile"));
const iniFileToObject_1 = __importDefault(require("../methods/INIparser/iniFileToObject"));
const parseIniArrayList_1 = __importDefault(require("../methods/INIparser/parseIniArrayList"));
const parseINIString_1 = __importDefault(require("../methods/INIparser/parseINIString"));
const parseStringArr_1 = __importDefault(require("../methods/INIparser/parseStringArr"));
const parseTime_1 = __importDefault(require("../methods/INIparser/parseTime"));
const parseUnitString_1 = __importDefault(require("../methods/INIparser/parseUnitString"));
const ReadCommands_1 = __importDefault(require("../methods/INIparser/ReadCommands"));
const sendCommand_1 = __importDefault(require("../methods/INIparser/sendCommand"));
const stringifyStrArr_1 = __importDefault(require("../methods/INIparser/stringifyStrArr"));
class INIparser {
    constructor() { }
}
exports.default = INIparser;
INIparser.iniFileToObject = iniFileToObject_1.default;
INIparser.parseIniArrayList = parseIniArrayList_1.default;
INIparser.parseINIString = parseINIString_1.default;
INIparser.parseStringArr = parseStringArr_1.default;
INIparser.parseTime = parseTime_1.default;
INIparser.parseUnitString = parseUnitString_1.default;
INIparser.sendCommand = sendCommand_1.default;
INIparser.clearIniFile = clearIniFile_1.default;
INIparser.readCommands = ReadCommands_1.default;
INIparser.stringifyStrArr = stringifyStrArr_1.default;
INIparser.cleanString = cleanString_1.default;
