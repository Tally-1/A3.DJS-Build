"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function writeGameInfo(pencil, snapshot, sessionInfo, backGroundData) {
    const text = sessionInfo.map + "  " + snapshot.dayTime;
    const { center, bottomLeft, size } = backGroundData;
    const margin = 22;
    const top = 80;
    const left = 50;
    const unitsNotFound = ((!backGroundData.positionsFound) && sessionInfo.focusType != 0);
    // console.log(!backGroundData.positionsFound);
    let textSize = 30;
    pencil.font = textSize + "px Arial";
    pencil.fillStyle = "#47fff6";
    pencil.fillText(text, left, top);
    textSize = 20;
    pencil.font = textSize + "px Arial";
    pencil.fillText(("Area size: " + size), left, top + (margin * 2));
    pencil.fillText(("Area corner: " + bottomLeft), left, top + (margin * 3));
    pencil.fillText(("center: " + center), left, top + (margin * 4));
    pencil.fillText(("update time: " + sessionInfo.lastTime + "ms"), left, top + (margin * 5));
    textSize = 30;
    if (unitsNotFound) {
        pencil.font = "800 " + textSize + "px Arial";
        pencil.fillStyle = "#ff0000";
        pencil.fillText(("Could not find focus-units"), 10, 990);
    }
    ;
}
exports.default = writeGameInfo;
;
