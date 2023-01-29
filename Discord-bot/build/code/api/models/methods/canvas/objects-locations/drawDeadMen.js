"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function drawDeadMen(snapshot, pencil, backGroundData) {
    const deathIds = Object.keys(snapshot.deadMen);
    for (const id of deathIds) {
        const unit = snapshot.deadMen[id];
        const noVehicle = (unit.vehicle === "");
        const fresh = unit.timeOfDeath < 300;
        const icon = this.icons["OTHER"]["tombStone1"];
        if (noVehicle && fresh) {
            this.drawObjectMarker(unit, pencil, icon, 32, backGroundData, snapshot, 0);
        }
        ;
    }
    ;
}
exports.default = drawDeadMen;
