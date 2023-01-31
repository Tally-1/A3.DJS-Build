"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function focusTypeText() {
    let focusType = [
        "Whole Map",
        "Players",
        "Blufor",
        "Opfor",
        "Independent",
        "Civilian",
        "Blufor, Opfor",
        "Blufor, Independent",
        "Opfor, Independent",
        "All units"
    ][this.focusType];
    if (this.focusEnemy && this.focusType !== 9) {
        focusType = focusType + " and known enemies";
    }
    focusType = focusType + ".";
    return focusType;
}
exports.default = focusTypeText;
;
