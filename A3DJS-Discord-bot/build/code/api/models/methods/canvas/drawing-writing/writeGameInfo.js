"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const capOne_1 = __importDefault(require("../../../../util/capOne"));
const multiLineWrite_1 = __importDefault(require("./multiLineWrite"));
const write_1 = __importDefault(require("./write"));
function writeGameInfo(pencil, snapshot, sessionInfo, backGroundData, knownMap) {
    //Show map-name (top left)
    pencil.font = "600 25px Comic Sans MS";
    const Title = (0, capOne_1.default)(sessionInfo.map) + "  " + snapshot.dayTime;
    const pos = backGroundData.center;
    (0, write_1.default)(pencil, Title, [20, 40], "#3df9ff");
    //Show data (bottom left)
    const sysData = [
        "Server-FPS:  " + snapshot.serverFps / 1000,
        "A3 write time: " + snapshot.writeTime + " ms",
        new Date().getTime().toString()
    ];
    if (sessionInfo.lastTime) {
        sysData.splice(1, 0, "JS draw time: " + sessionInfo.lastTime + " ms");
    }
    ;
    const gameData = [
        "Target: " + sessionInfo.focusTypeText(),
        "Area-size: " + backGroundData.size + "m2",
        "Position: [" + pos[0] + ", " + (Math.round(pos[1] / 100) * 100) + "]"
    ];
    const textSize = 20;
    const y = 1000 - (sysData.length * textSize);
    pencil.font = textSize + "px Arial";
    (0, multiLineWrite_1.default)(pencil, [800, y], 24, sysData, "#f0f8ffab");
    (0, multiLineWrite_1.default)(pencil, [20, 70], 24, gameData, "#f0f8ffab");
    //Debug message in case no units are found to focus on.
    const unitsNotFound = !backGroundData.positionsFound && sessionInfo.focusType != 0;
    if (unitsNotFound) {
        pencil.font = "800 " + 30 + "px Arial";
        (0, write_1.default)(pencil, "Could not find target-units", [300, 990], "#ff0000");
    }
    if (!knownMap) {
        pencil.font = "800 " + 30 + "px Arial";
        (0, write_1.default)(pencil, 'Map: "' + sessionInfo.map + '" currently not added to A3.DJS, using VR data.', [20, 890], "#ff0000");
    }
}
exports.default = writeGameInfo;
