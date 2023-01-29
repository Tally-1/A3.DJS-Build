"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function drawExplosions(snapshot, pencil, backGroundData) {
    const exIds = Object.keys(snapshot.explosions);
    for (const id of exIds) {
        const explosion = snapshot.explosions[id];
        const icon = this.icons["OTHER"]["explosion"];
        const size = (explosion.size * 5);
        this.drawObjectMarker(explosion, pencil, icon, size, backGroundData, snapshot);
    }
    ;
}
exports.default = drawExplosions;
