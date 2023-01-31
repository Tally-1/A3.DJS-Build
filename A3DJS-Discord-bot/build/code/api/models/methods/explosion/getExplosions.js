"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const explosion_1 = __importDefault(require("../../classes/explosion"));
const INIparser_1 = __importDefault(require("../../classes/INIparser"));
function getExplosions(stringArr) {
    const parsedArray = INIparser_1.default.parseStringArr(stringArr);
    const explosions = {};
    for (const dataArr of parsedArray) {
        const explosionData = dataArr;
        const explosion = new explosion_1.default(...explosionData);
        explosions[(explosion.pos + "")] = explosion;
    }
    ;
    return explosions;
}
exports.default = getExplosions;
;
