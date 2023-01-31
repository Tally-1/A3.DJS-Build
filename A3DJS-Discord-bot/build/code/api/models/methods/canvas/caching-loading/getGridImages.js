"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multiGrid_1 = __importDefault(require("../../../../util/multiGrid"));
function getGridImages(start, xCount) {
    const grids = (0, multiGrid_1.default)(start, xCount);
    const waterGrids = this.mapData.waterGrids;
    const gridImages = [];
    for (const grid of grids) {
        let gridName = "[" + grid + "]";
        const waterGrid = waterGrids.includes(gridName);
        if (waterGrid) {
            gridName = "water";
        }
        ;
        const gridImage = this.grids[gridName];
        if (gridImage !== undefined) {
            gridImages.push(gridImage);
        }
        else {
            gridImages.push(this.grids[("[-1,-1]")]);
        }
        ;
    }
    ;
    return gridImages;
}
exports.default = getGridImages;
