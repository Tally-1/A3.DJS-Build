"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const multiGrid_1 = __importDefault(require("../../../../util/multiGrid"));
function drawMultiGrid(baseGrid, xGridCount, imageSize, map, path, returnCnvsElement) {
    let canvasXInstance = this;
    if (!path) {
        path = "./maps/" + map + "/cache/misc/[" + baseGrid + "]" + "x" + xGridCount + " " + imageSize + "px" + ".jpg";
    }
    ;
    if (canvasXInstance === undefined) {
        console.log("CanvasX is undefined");
        // this = require("@napi-rs/canvas");
    }
    ;
    if (fs_1.default.existsSync(path)
        && !returnCnvsElement) {
        return path;
    }
    ;
    const grids = (0, multiGrid_1.default)(baseGrid, xGridCount);
    const gridImages = [];
    const waterGrids = this.mapData.waterGrids;
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
    let size = gridImages[0].naturalWidth;
    if (undefined != imageSize) {
        size = imageSize;
    }
    ;
    const gridSize = size / xGridCount;
    const frame = this.createCanvas(size, size);
    const pencil = frame.getContext('2d');
    let x = 0;
    //Y-coordinates in Arma 3 and in web-dev are the oposite, hence the position needs to be inverted.
    let y = 0 + (size - gridSize);
    for (const image of gridImages) {
        if (x >= size) {
            x = 0;
            y = y - gridSize;
        }
        pencil.drawImage(image, x, y, gridSize, gridSize);
        x = x + gridSize;
    }
    ;
    if (returnCnvsElement) {
        return frame;
    }
    ;
    const buffer = this.toBuffer('image/jpeg');
    fs_1.default.writeFileSync(path, buffer);
    console.log("created file: " + path);
    return path;
}
exports.default = drawMultiGrid;
;
