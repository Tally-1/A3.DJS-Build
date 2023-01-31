"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function unitsKnownEnemies(men, snapshot, concat) {
    const allEnemies = {};
    const uids = Object.keys(men);
    for (const uid of uids) {
        const man = men[uid];
        for (const enemyID of man.enemies) {
            const enemy = snapshot.units[enemyID];
            const enemyIds = Object.keys(allEnemies);
            const include = !enemyIds.includes(enemyID) && enemy !== undefined;
            if (include) {
                allEnemies[enemyID] = enemy;
            }
        }
    }
    if (!concat) {
        return allEnemies;
    }
    const enemyIds = Object.keys(allEnemies);
    for (const uid of uids) {
        const man = men[uid];
        const include = !enemyIds.includes(man.uid) && man !== undefined;
        if (include) {
            allEnemies[uid] = man;
        }
    }
    return allEnemies;
}
exports.default = unitsKnownEnemies;
