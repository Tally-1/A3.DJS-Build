"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
const maxMinArr_1 = require("./maxMinArr");
function defineArea(positions) {
    const xValues = [];
    const yValues = [];
    for (const pos of positions) {
        xValues.push(pos[0]);
        yValues.push(pos[1]);
    }
    const maxX = (0, maxMinArr_1.maxOfArray)(xValues);
    const maxY = (0, maxMinArr_1.maxOfArray)(yValues);
    const minX = (0, maxMinArr_1.minOfArray)(xValues);
    const minY = (0, maxMinArr_1.minOfArray)(yValues);
    const size = (0, maxMinArr_1.maxOfArray)([maxX - minX, maxY - minY]);
    const bottomLeft = [minX, minY];
    const topRight = [minX + size, minY + size];
    return {
        bottomLeft: bottomLeft,
        topRight: topRight,
        size: size,
    };
}
exports.default = defineArea;
