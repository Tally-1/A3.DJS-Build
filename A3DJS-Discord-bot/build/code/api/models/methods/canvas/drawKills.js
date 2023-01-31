"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const A3posToJsPos_1 = __importDefault(require("../../../util/A3posToJsPos"));
function drawKills(snapshot, pencil, backGroundData) {
    const killIds = Object.keys(snapshot.kills);
    for (const id of killIds) {
        const kill = snapshot.kills[id];
        drawKillLine(kill, pencil, backGroundData);
    }
    ;
}
exports.default = drawKills;
function drawKillLine(kill, pencil, backGroundData) {
    const [killerX, killerY] = (0, A3posToJsPos_1.default)(kill.killerPos, backGroundData);
    const [victimX, victimY] = (0, A3posToJsPos_1.default)(kill.victimPos, backGroundData);
    pencil.strokeStyle = '#ff5500';
    pencil.lineWidth = 3;
    pencil.beginPath();
    pencil.moveTo(killerX, killerY);
    pencil.lineTo(victimX, victimY);
    pencil.stroke();
}
;
