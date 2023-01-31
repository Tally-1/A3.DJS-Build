"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const positionData_1 = __importDefault(require("./positionData"));
function A3ToCanvasGridPos(position, size) {
    const grid = (0, positionData_1.default)(position).grid;
    const bottomLeft = [(grid[0] * 1000), grid[1] * 1000];
    const x = (bottomLeft[0] - position[0]);
    let yDiff = (bottomLeft[1] - position[1]);
    if (yDiff < 0) {
        yDiff = (0 - yDiff);
    }
    ;
    const v = 3000 / size; //console.log(v);
    const baseY = (0 - (size * v)) + size;
    const y = (baseY + yDiff);
    if (x > 0)
        console.log("" + x + " " + grid + " " + bottomLeft);
    return [x, y];
}
exports.default = A3ToCanvasGridPos;
;
