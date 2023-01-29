"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function drawMen(snapshot, pencil, backGroundData) {
    const unitIds = Object.keys(snapshot.units);
    for (const id of unitIds) {
        const unit = snapshot.units[id];
        const inVehicle = (unit.vehicle != "");
        let icon = this.icons[unit.side][unit.icon];
        if (!icon) {
            icon = this.icons[unit.side]["iconMan_ca"];
        }
        ;
        if (!inVehicle) {
            this.drawObjectMarker(unit, pencil, icon, 40, backGroundData, snapshot);
        }
        ;
    }
    ;
}
exports.default = drawMen;
;
