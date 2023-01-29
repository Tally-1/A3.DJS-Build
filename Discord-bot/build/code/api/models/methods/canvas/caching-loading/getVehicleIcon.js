"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function getVehicleIcon(vehicle) {
    let icon = this.icons[vehicle.side][vehicle.icon];
    if (icon) {
        return icon;
    }
    ;
    icon = this.icons[vehicle.side][(vehicle.icon.toLowerCase())];
    if (icon) {
        return icon;
    }
    ;
    icon = this.icons[vehicle.side][(vehicle.type)];
    if (!icon) {
        icon = this.icons[vehicle.side]["iconVehicle_ca"];
    }
    ;
    return icon;
}
exports.default = getVehicleIcon;
;
