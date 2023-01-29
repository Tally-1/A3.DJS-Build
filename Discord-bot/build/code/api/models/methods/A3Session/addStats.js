"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function addStats(snapshot) {
    const newKills = Object.keys(snapshot.kills);
    const newExplosions = Object.keys(snapshot.explosions);
    for (const k of newKills) {
        this.stats.kills[k] = snapshot.kills[k];
    }
    ;
    for (const x of newExplosions) {
        this.stats.explosions[x] = snapshot.explosions[x];
    }
    ;
    this.stats.shotsFired = this.stats.shotsFired + snapshot.shotsFired;
    return;
}
exports.default = addStats;
;
