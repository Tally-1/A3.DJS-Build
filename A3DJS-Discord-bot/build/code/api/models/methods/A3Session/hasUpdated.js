"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function hasUpdated() {
    const current = this.latestUpdateTime();
    const updated = current !== this.lastGameUpdate;
    this.lastGameUpdate = current;
    return updated;
}
exports.default = hasUpdated;
;
