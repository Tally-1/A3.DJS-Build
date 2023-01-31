"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multiGrid_1 = __importDefault(require("../../../../util/multiGrid"));
function getGridImages(start, count) {
    const grids = (0, multiGrid_1.default)([0, 0], count);
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
    console.log(gridImages.length);
    return gridImages;
}
exports.default = getGridImages;
