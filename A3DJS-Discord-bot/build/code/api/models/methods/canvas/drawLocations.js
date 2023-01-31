"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const A3posToJsPos_1 = __importDefault(require("../../../util/A3posToJsPos"));
function drawLocations(pencil, backGroundData) {
    const locations = Object.keys(this.mapData.locations);
    for (const name of locations) {
        const location = this.mapData.locations[name];
        showLocation(name, location, backGroundData, pencil);
    }
    ;
}
exports.default = drawLocations;
function showLocation(name, location, backGroundData, pencil) {
    const [x, y] = (0, A3posToJsPos_1.default)(location.pos, backGroundData);
    if ((x < 0 || (x > 1000))
        || (y < 0 || (y > 1000))) {
        return;
    }
    ;
    let textSize = 25;
    if (location.type == "NameLocal"
        || location.type == "NameVillage") {
        textSize = 20;
    }
    ;
    pencil.fillStyle = "#ffffffbb";
    pencil.font = textSize + "px Arial";
    pencil.fillText(name, x, y);
}
;
