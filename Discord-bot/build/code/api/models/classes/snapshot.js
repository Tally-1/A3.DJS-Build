"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getUnitsBySide_1 = __importDefault(require("../methods/snapshot/getUnitsBySide"));
const getUnitsInFocus_1 = __importDefault(require("../methods/snapshot/getUnitsInFocus"));
const getCurrent_1 = __importDefault(require("../methods/snapshot/getCurrent"));
const getNames_1 = __importDefault(require("../methods/snapshot/getNames"));
class Snapshot {
    constructor(units, players, deadMen, vehicles, markers, kills, explosions, time, dayTime, writeTime, shotsFired, serverFps) {
        this.getUnitsBySide = getUnitsBySide_1.default;
        this.getUnitsInFocus = getUnitsInFocus_1.default;
        this.getNames = getNames_1.default;
        this.units = units;
        this.players = players;
        this.deadMen = deadMen;
        this.vehicles = vehicles;
        this.markers = markers;
        this.kills = kills;
        this.explosions = explosions;
        this.time = time;
        this.dayTime = dayTime;
        this.writeTime = writeTime;
        this.shotsFired = shotsFired;
        this.serverFps = serverFps;
    }
    ;
}
exports.default = Snapshot;
Snapshot.getCurrent = getCurrent_1.default;
