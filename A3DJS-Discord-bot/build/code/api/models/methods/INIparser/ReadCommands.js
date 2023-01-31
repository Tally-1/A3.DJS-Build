"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const INIparser_1 = __importDefault(require("../../classes/INIparser"));
const requestHandler_1 = __importDefault(require("./requestHandler"));
function readCommands(sessionData, folder) {
    const commands = INIparser_1.default.iniFileToObject(folder, "A3ToDJS_commandsOut");
    const keys = Object.keys(commands);
    for (const key of keys) {
        const command = INIparser_1.default.parseStringArr(commands[key]);
        const [params, commandType] = command;
        let knownCommand = [
            "chat",
            "player-connection",
            "response"
        ].includes(commandType);
        if (knownCommand) {
            (0, requestHandler_1.default)(commandType, params, sessionData);
        }
        else {
            console.dir(command);
            console.log("Unknown command!-> " + commandType);
            //insert command-handling here once a use-case is clear
        }
        ;
    }
    ;
    try {
        INIparser_1.default.clearIniFile(folder, "A3ToDJS_commandsOut");
    }
    catch (error) { }
    return commands;
}
exports.default = readCommands;
;
//output:
//[["stringParam", 2, true],"CommandType"];
