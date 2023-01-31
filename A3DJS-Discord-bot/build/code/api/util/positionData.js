"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function positionData(position) {
    const grid = [Math.floor(position[0] / 1000), Math.floor(position[1] / 1000)];
    const gridPos = [grid[0] * 1000, grid[1] * 1000];
    const subGrid = [Math.floor((Math.floor(position[0] - ((grid[0]) * 1000))) / 100),
        Math.floor((Math.floor(position[1] - ((grid[1]) * 1000))) / 100)];
    const round100 = [(Math.floor(position[0] / 100) * 100), (Math.floor(position[1] / 100) * 100) + 50];
    const posData = {
        pos: position,
        round100: round100,
        grid: grid,
        gridPos: gridPos,
        subGrid: subGrid
    };
    return posData;
}
exports.default = positionData;
