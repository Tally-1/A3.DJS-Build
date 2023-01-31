"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const iniParsing_1 = require("../../../util/iniParsing");
const explosion_1 = __importDefault(require("../../classes/explosion"));
function getExplosions(stringArr) {
    const parsedArray = (0, iniParsing_1.parseStringArr)(stringArr);
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
