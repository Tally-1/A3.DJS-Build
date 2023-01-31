"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function liveFeedUnitsDuration(snapshot) {
    const playerCount = Object.keys(snapshot.players).length;
    const unitCount = Object.keys(snapshot.units).length;
    const aiCount = unitCount - playerCount;
    const duration = Math.floor(snapshot.time / 60);
    this.addFields({ name: 'Players', value: playerCount + "", inline: true });
    if (aiCount > 0) {
        this.addFields({ name: 'Ai', value: aiCount + "", inline: true });
    }
    ;
    this.addFields({ name: 'Duration', value: duration + " minutes", inline: true });
    return this;
}
exports.default = liveFeedUnitsDuration;
;
