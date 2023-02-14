"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function drawMen(snapshot, pencil, backGroundData) {
    const unitIds = Object.keys(snapshot.units);
    for (const id of unitIds) {
        const unit = snapshot.units[id];
        const inVehicle = unit.vehicle != "";
        let side = unit.side;
        const validSide = ["EAST", "WEST", "CIV", "GUER"].includes(side);
        if (!validSide) {
            side = "CIV";
        }
        ;
        let icon = this.icons[side][unit.icon];
        if (!icon) {
            this.storeUnknownIconName(unit.icon);
            icon = this.icons[side]["iconMan_ca"];
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
