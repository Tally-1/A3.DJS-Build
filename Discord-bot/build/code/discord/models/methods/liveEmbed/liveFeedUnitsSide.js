"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function liveFeedUnitsSide(snapshot) {
    const bluForCount = Object.keys(snapshot.getUnitsBySide(["WEST"])).length;
    const opForCount = Object.keys(snapshot.getUnitsBySide(["EAST"])).length;
    const indyCount = Object.keys(snapshot.getUnitsBySide(["GUER"])).length;
    const sum = (bluForCount + opForCount + indyCount);
    if (sum === 0) {
        return this;
    }
    ;
    this.addFields({ name: '\u200B', value: '\u200B' + 'Unit-count pr side:' });
    if (bluForCount > 0) {
        this.addFields({ name: 'Blufor', value: "" + bluForCount, inline: true });
    }
    ;
    if (opForCount > 0) {
        this.addFields({ name: 'Opfor', value: "" + opForCount, inline: true });
    }
    ;
    if (indyCount > 0) {
        this.addFields({ name: 'Independent', value: "" + indyCount, inline: true });
    }
    ;
    return this;
}
exports.default = liveFeedUnitsSide;
;
