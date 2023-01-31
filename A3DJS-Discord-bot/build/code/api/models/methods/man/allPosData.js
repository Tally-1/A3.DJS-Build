"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const avgPos_1 = __importDefault(require("../../../util/avgPos"));
const defineArea_1 = __importDefault(require("../../../util/defineArea"));
function allPosData(units) {
    const positions = [];
    const unitIds = Object.keys(units);
    for (const id of unitIds) {
        const unit = units[id];
        if (!positions.includes(unit.pos)) {
            positions.push(unit.pos);
        }
    }
    const data = (0, defineArea_1.default)(positions);
    const center = (0, avgPos_1.default)(positions);
    const posData = {
        positions: positions,
        center: center,
        size: data.size * 1.2,
        bottomLeft: data.bottomLeft,
        topRight: data.topRight,
    };
    return posData;
}
exports.default = allPosData;
