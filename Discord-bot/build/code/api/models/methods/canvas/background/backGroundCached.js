"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function backGroundCached(imgCacheName) {
    const cached = ((this.customGrids[imgCacheName] != undefined)
        || (this.x3Grids[imgCacheName] != undefined)
        || (this.multiGrids[imgCacheName] != undefined));
    return cached;
}
exports.default = backGroundCached;
;
