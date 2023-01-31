"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const INIparser_1 = __importDefault(require("../../classes/INIparser"));
const vehicle_1 = __importDefault(require("../../classes/vehicle"));
function getAllVehicles(stringArr) {
    const parsedArray = INIparser_1.default.parseStringArr(stringArr);
    const vehicles = {};
    for (const vArr of parsedArray) {
        const data = vArr;
        const vehicle = new vehicle_1.default(...data);
        vehicles[vehicle.uid] = vehicle;
    }
    ;
    return vehicles;
}
exports.default = getAllVehicles;
;
