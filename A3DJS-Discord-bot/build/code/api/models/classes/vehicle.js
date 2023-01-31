"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllVehicles_1 = __importDefault(require("../methods/vehicle/getAllVehicles"));
const playerInCrew_1 = __importDefault(require("../methods/vehicle/playerInCrew"));
;
class Vehicle {
    constructor(uid, name, type, side, pos, dir, crew, cfgName, icon) {
        this.uid = uid;
        this.name = name;
        this.type = type;
        this.side = side;
        this.pos = pos;
        this.dir = dir;
        this.crew = crew;
        this.playerCrew = (0, playerInCrew_1.default)(crew);
        this.cfgName = cfgName;
        this.icon = icon;
    }
}
exports.default = Vehicle;
Vehicle.getAllVehicles = getAllVehicles_1.default;
