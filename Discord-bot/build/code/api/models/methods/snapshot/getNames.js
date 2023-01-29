"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function getNames(playersOnly) {
    let units = this.units;
    if (playersOnly) {
        units = this.players;
    }
    ;
    const names = [];
    const ids = Object.keys(units);
    for (const id of ids) {
        const unit = units[id];
        names.push(unit.name);
    }
    ;
    return names;
}
exports.default = getNames;
