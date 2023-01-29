"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const A3posToJsPos_1 = __importDefault(require("../../../util/A3posToJsPos"));
const man_1 = __importDefault(require("../../classes/man"));
const vehicle_1 = __importDefault(require("../../classes/vehicle"));
function drawObjectMarker(object, pencil, icon, iconSize, backGroundData, snapshot, forcedDir) {
    const [x, y] = (0, A3posToJsPos_1.default)(object.pos, backGroundData);
    // if the units position is out of bounds then do not draw the marker.
    if ((x < 0 || (x > 1000))
        || (y < 0 || (y > 1000))) {
        return;
    }
    ;
    let dir = object.dir;
    if (forcedDir !== undefined) {
        dir = forcedDir;
    }
    ;
    const textSize = 15;
    pencil.fillStyle = "#ffffff";
    pencil.font = textSize + "px Arial";
    //make sure icon is drawn at center of icon-image
    const cIcon = 0 - (iconSize / 2);
    //adjust context to wanted position
    pencil.translate(x, y);
    // rotate to wanted dir
    pencil.rotate(dir * Math.PI / 180);
    //draw icon
    pencil.drawImage(icon, cIcon, cIcon, iconSize, iconSize);
    //return context to normal
    pencil.rotate((360 - dir) * Math.PI / 180);
    pencil.translate((0 - x), (0 - y));
    if (object instanceof man_1.default
        && object.isPlayer) {
        pencil.fillText(object.name, x, y);
    }
    ;
    if (object instanceof vehicle_1.default) {
        if (object.playerCrew) {
            const textStartY = (y + (iconSize / 2));
            const crewIds = object.crew;
            let j = 0;
            for (const id of crewIds) {
                const y = textStartY + ((textSize * j) + 5);
                const player = snapshot.players[id];
                if (player) {
                    pencil.fillText(player.name, x, y);
                    j++;
                }
                ;
            }
            ;
        }
        ;
    }
    return;
}
exports.default = drawObjectMarker;
;
