"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function drawDeadMen(snapshot, pencil, backGroundData, gameTime) {
    const deathIds = Object.keys(snapshot.deadMen);
    for (const id of deathIds) {
        const unit = snapshot.deadMen[id];
        const noVehicle = (unit.vehicle === "");
        const fresh = gameTime - unit.timeOfDeath < 300;
        const icon = this.icons["OTHER"]["tombStone1"];
        if (noVehicle && fresh) {
            this.drawObjectMarker(unit, pencil, icon, 20, backGroundData, snapshot, 0);
        }
        ;
    }
    ;
}
exports.default = drawDeadMen;
