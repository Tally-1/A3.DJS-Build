"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function getUnitsBySide(sides) {
    const uids = Object.keys(this.units);
    const men = {};
    for (const uid of uids) {
        const man = this.units[uid];
        if (sides.includes(man.side)) {
            men[uid] = man;
        }
    }
    return men;
}
exports.default = getUnitsBySide;
