"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function x3gridImage(bottomLeftGrid, map) {
    const path = "./maps/" + map + "/cache/3x3/[" + bottomLeftGrid + "].jpg";
    this.drawMultiGrid(bottomLeftGrid, 3, 3000, map, path, false);
    return path;
}
exports.default = x3gridImage;
