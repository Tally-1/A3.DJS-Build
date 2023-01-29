"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const equalArr_1 = __importDefault(require("../../util/equalArr"));
const defineBackGround_1 = __importDefault(require("../methods/focusArea/defineBackGround"));
const man_1 = __importDefault(require("./man"));
class FocusArea {
    constructor(snapshot, sessionInfo) {
        this.defineBackGround = defineBackGround_1.default;
        let unitsInFocus = snapshot.getUnitsInFocus(sessionInfo);
        const addEnemies = sessionInfo.focusEnemy && sessionInfo.focusType > 0;
        if (addEnemies) {
            unitsInFocus = man_1.default.unitsKnownEnemies(unitsInFocus, snapshot, true);
        }
        const areaData = man_1.default.allPosData(unitsInFocus);
        const showWholeMap = sessionInfo.focusType === 0 || (0, equalArr_1.default)(areaData.positions, []);
        if (showWholeMap) {
            const mapSize = sessionInfo.mapData.size;
            const mapCenter = [
                Math.round(mapSize / 2) * 1000,
                Math.round(mapSize / 2) * 1000,
            ];
            areaData.center = mapCenter;
            areaData.size = mapSize * 1000;
        }
        this.positions = areaData.positions;
        this.center = areaData.center;
        this.size = areaData.size;
        this.bottomLeft = areaData.bottomLeft;
        this.topRight = areaData.topRight;
    }
}
exports.default = FocusArea;
