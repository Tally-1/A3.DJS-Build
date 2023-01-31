"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const snapshot_1 = __importDefault(require("../../classes/snapshot"));
const man_1 = __importDefault(require("../../classes/man"));
const vehicle_1 = __importDefault(require("../../classes/vehicle"));
const marker_1 = __importDefault(require("../../classes/marker"));
const kill_1 = __importDefault(require("../../classes/kill"));
const explosion_1 = __importDefault(require("../../classes/explosion"));
const INIparser_1 = __importDefault(require("../../classes/INIparser"));
function getCurrent(folder) {
    const mainData = INIparser_1.default.iniFileToObject(folder, "A3ToDJS");
    const { men, players } = man_1.default.getMen(mainData);
    const deadMen = man_1.default.getDeadMen(folder);
    const markers = marker_1.default.getMarkers(folder);
    const dayTime = INIparser_1.default.parseTime(mainData.dayTime);
    const time = +JSON.parse(mainData.time);
    const vehicles = vehicle_1.default.getAllVehicles(mainData.vehicles);
    const kills = kill_1.default.getKills(mainData.kills);
    const explosions = explosion_1.default.getExplosions(mainData.explosions);
    const shotsFired = +JSON.parse(mainData.shotsFired);
    const writeTime = Math.round(JSON.parse(mainData.writeTime) * 1000);
    const serverFps = Math.round(JSON.parse(mainData["server-fps"]) * 1000);
    const snapshot = new snapshot_1.default(men, players, deadMen, vehicles, markers, kills, explosions, time, dayTime, writeTime, shotsFired, serverFps);
    return snapshot;
}
exports.default = getCurrent;
;
module.exports = getCurrent;
