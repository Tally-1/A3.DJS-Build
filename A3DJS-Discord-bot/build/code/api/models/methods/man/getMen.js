"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const INIparser_1 = __importDefault(require("../../classes/INIparser"));
const man_1 = __importDefault(require("../../classes/man"));
function getMen(data) {
    const iterations = JSON.parse(JSON.parse(data.unitsIndex));
    let allUnits = [];
    for (let i = 0; i < iterations; i++) {
        const unitArr = INIparser_1.default.parseUnitString(data["units_" + i]);
        allUnits = [...allUnits, ...unitArr];
    }
    const men = {};
    const players = {};
    for (const data of allUnits) {
        const dataArr = data;
        const man = new man_1.default(...dataArr);
        men[man.uid] = man;
        if (man.isPlayer) {
            players[man.uid] = man;
        }
    }
    ;
    return { men: men, players: players };
}
exports.default = getMen;
;
