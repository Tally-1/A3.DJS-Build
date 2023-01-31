"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function drawGrids(baseGrid, xGridCount, imageSize, map, pth, returnCnvsElement) {
    const mapsFolder = path_1.default.join(__dirname, "..", "..", "..", "..", "maps");
    if (!pth) {
        pth = path_1.default.join(mapsFolder, map, "cache", "custom", map + ".jpg");
    }
    ;
    if (fs_1.default.existsSync(pth)
        && !returnCnvsElement) {
        return pth;
    }
    ;
    const gridImages = this.getGridImages(baseGrid, xGridCount);
    const frame = this.createCanvas(imageSize, imageSize);
    const gridImgSize = imageSize / xGridCount;
    const pencil = frame.getContext('2d');
    let x = 0;
    let y = 0 + (imageSize - gridImgSize);
    let i = 0;
    for (const image of gridImages) {
        if (i == xGridCount) {
            x = 0;
            y = y - gridImgSize;
            i = 0;
        }
        pencil.drawImage(image, x, y, gridImgSize, gridImgSize);
        x = x + gridImgSize;
        i++;
    }
    ;
    if (returnCnvsElement) {
        return frame;
    }
    ;
    const buffer = frame.toBuffer('image/jpeg');
    fs_1.default.writeFileSync(pth, buffer);
    console.log("created file: " + pth);
    return path_1.default;
}
exports.default = drawGrids;
;
