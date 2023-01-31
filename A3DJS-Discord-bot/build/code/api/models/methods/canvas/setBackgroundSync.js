"use strict";
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
