"use strict";
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
const iniParsing_1 = require("../../../util/iniParsing");
function buildCurrent(folder) {
    const mainData = (0, iniParsing_1.iniFileToObject)(folder, "A3ToDJS");
    const { men, players } = man_1.default.getMen(mainData);
    const deadMen = man_1.default.getDeadMen(folder);
    const markers = marker_1.default.getMarkers(folder);
    const dayTime = (0, iniParsing_1.parseTime)(mainData.dayTime);
    const time = +JSON.parse(mainData.time);
    const vehicles = vehicle_1.default.getAllVehicles(mainData.vehicles);
    const kills = kill_1.default.getKills(mainData.kills);
    const explosions = explosion_1.default.getExplosions(mainData.explosions);
    const snapshot = new snapshot_1.default(men, players, deadMen, vehicles, markers, kills, explosions, time, dayTime);
    return snapshot;
}
exports.default = buildCurrent;
;
module.exports = buildCurrent;
