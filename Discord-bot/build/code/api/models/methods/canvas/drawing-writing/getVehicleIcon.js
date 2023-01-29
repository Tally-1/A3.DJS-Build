"use strict";
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
