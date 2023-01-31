"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getKills_1 = __importDefault(require("../methods/kill/getKills"));
const killText_1 = __importDefault(require("../methods/kill/killText"));
;
class Kill {
    constructor(victimId, victimPos, killerId, killerPos, weapon, distance) {
        this.killText = killText_1.default;
        this.victimId = victimId;
        this.victimPos = victimPos;
        this.killerId = killerId;
        this.killerPos = killerPos;
        this.weapon = weapon;
        this.distance = distance;
        this.time = new Date().getTime();
    }
    ;
}
exports.default = Kill;
Kill.getKills = getKills_1.default;
