"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getMen_1 = __importDefault(require("../methods/man/getMen"));
const getDeadMen_1 = __importDefault(require("../methods/man/getDeadMen"));
const allPosData_1 = __importDefault(require("../methods/man/allPosData"));
const unitsKnownEnemies_1 = __importDefault(require("../methods/man/unitsKnownEnemies"));
;
class Man {
    constructor(uid, name, icon, side, pos, dir, enemies, vehicle, timeOfDeath) {
        this.uid = uid,
            this.name = name,
            this.icon = icon + "_ca",
            this.side = side,
            this.pos = pos,
            this.dir = dir,
            this.enemies = enemies,
            this.vehicle = vehicle,
            this.timeOfDeath = timeOfDeath, //if unit is alive then this matches current ingame time
            this.isPlayer = uid.startsWith("7656") || uid.startsWith("_SP_PLAYER_");
    }
}
exports.default = Man;
Man.getMen = getMen_1.default;
Man.getDeadMen = getDeadMen_1.default;
Man.allPosData = allPosData_1.default;
Man.unitsKnownEnemies = unitsKnownEnemies_1.default;
