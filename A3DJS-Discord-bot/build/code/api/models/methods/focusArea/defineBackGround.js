"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const positionData_1 = __importDefault(require("../../../util/positionData"));
const roundBottomLeft_1 = __importDefault(require("../../../util/roundBottomLeft"));
function defineBackGround() {
    const center = (0, positionData_1.default)(this.center).round100;
    let size = (Math.ceil(this.size / 100)) * 100;
    const useMultiGrid = size > 2000;
    const positionsFound = this.positions.length > 0;
    if (size < 500) {
        size = 500;
    }
    ;
    if (useMultiGrid) {
        size = (Math.ceil(size / 1000)) * 1000;
    }
    ;
    const bottomLeft = (0, roundBottomLeft_1.default)(center, size);
    const imgSizeName = " " + size + "x" + size;
    let imgCacheName = "[" + bottomLeft + "]" + imgSizeName;
    if (useMultiGrid) {
        imgCacheName = "[" + ((0, positionData_1.default)(bottomLeft).grid) + "]" + imgSizeName;
    }
    ;
    const sizeFactor = size / 1000;
    const data = {
        center: center,
        bottomLeft: bottomLeft,
        imgCacheName: imgCacheName,
        size: size,
        sizeFactor: sizeFactor,
        positionsFound: positionsFound
    };
    return data;
}
exports.default = defineBackGround;
;
