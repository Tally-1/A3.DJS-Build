"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const INIparser_1 = __importDefault(require("../../classes/INIparser"));
const kill_1 = __importDefault(require("../../classes/kill"));
function getKills(stringArr) {
    const parsedArray = INIparser_1.default.parseStringArr(stringArr);
    const kills = {};
    for (const killData of parsedArray) {
        const kill = new kill_1.default(...killData);
        kills[kill.victimId] = kill;
    }
    ;
    return kills;
}
exports.default = getKills;
;
