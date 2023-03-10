"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function getUnitsInFocus(sessionInfo) {
    let men = {};
    if (sessionInfo.focusType == 0) {
        men;
    }
    if (sessionInfo.focusType == 1) {
        return this.players;
    }
    if (sessionInfo.focusType == 9) {
        return this.units;
    }
    if (sessionInfo.focusType == 2) {
        return this.getUnitsBySide(["WEST"]);
    }
    if (sessionInfo.focusType == 3) {
        return this.getUnitsBySide(["EAST"]);
    }
    if (sessionInfo.focusType == 4) {
        return this.getUnitsBySide(["GUER"]);
    }
    if (sessionInfo.focusType == 5) {
        return this.getUnitsBySide(["CIV"]);
    }
    if (sessionInfo.focusType == 6) {
        men = this.getUnitsBySide(["WEST", "EAST"]);
        return men;
    }
    if (sessionInfo.focusType == 7) {
        men = this.getUnitsBySide(["WEST", "GUER"]);
        return men;
    }
    if (sessionInfo.focusType == 8) {
        men = this.getUnitsBySide(["EAST", "GUER"]);
        return men;
    }
    return men;
}
exports.default = getUnitsInFocus;
