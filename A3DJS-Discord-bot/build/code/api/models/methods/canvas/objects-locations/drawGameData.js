"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function drawGameData(pencil, snapshot, backGroundData) {
    this.drawLocations(pencil, backGroundData);
    this.drawKills(snapshot, pencil, backGroundData);
    this.drawDeadMen(snapshot, pencil, backGroundData);
    this.drawMen(snapshot, pencil, backGroundData);
    this.drawVehicles(snapshot, pencil, backGroundData);
    this.drawExplosions(snapshot, pencil, backGroundData);
}
exports.default = drawGameData;
