"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function setBackgroundSync(pencil, data) {
    const { imgCacheName, size } = data;
    let background = this.customGrids[imgCacheName];
    if (size > 2000) {
        background = this.multiGrids[imgCacheName];
    }
    ;
    pencil.drawImage(background, 0, 0, 1000, 1000);
}
exports.default = setBackgroundSync;
;
