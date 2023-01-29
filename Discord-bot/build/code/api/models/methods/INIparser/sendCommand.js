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
function sendCommand(input, type, folder) {
    const request = INIparser_1.default.stringifyStrArr(input);
    const filePath = path_1.default.join(folder, "A3ToDJS_commandsIn.ini");
    const time = new Date().getTime();
    const commandText = '\nCommand_' + time + ' = ["' + request + '", "' + type + '"]';
    fs_1.default.appendFile(filePath, commandText, (err) => { if (err) {
        console.log(err);
    } });
}
exports.default = sendCommand;
