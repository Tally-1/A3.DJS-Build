"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function drawVehicles(snapshot, pencil, backGroundData) {
    const vehIds = Object.keys(snapshot.vehicles);
    for (const id of vehIds) {
        const vehicle = snapshot.vehicles[id];
        const icon = this.getVehicleIcon(vehicle);
        this.drawObjectMarker(vehicle, pencil, icon, 70, backGroundData, snapshot);
    }
    ;
}
exports.default = drawVehicles;
;
