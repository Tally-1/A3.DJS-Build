"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function backGroundCached(imgCacheName) {
    const cached = ((this.customGrids[imgCacheName] != undefined)
        || (this.x3Grids[imgCacheName] != undefined)
        || (this.multiGrids[imgCacheName] != undefined));
    return cached;
}
exports.default = backGroundCached;
;
