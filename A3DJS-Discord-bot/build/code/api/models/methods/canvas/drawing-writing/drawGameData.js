"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function drawGameData(pencil, snapshot, backGroundData, gameTime) {
    this.drawLocations(pencil, backGroundData);
    this.drawKills(snapshot, pencil, backGroundData);
    this.drawDeadMen(snapshot, pencil, backGroundData, gameTime);
    this.drawMen(snapshot, pencil, backGroundData);
    this.drawVehicles(snapshot, pencil, backGroundData);
    this.drawExplosions(snapshot, pencil, backGroundData);
}
exports.default = drawGameData;
