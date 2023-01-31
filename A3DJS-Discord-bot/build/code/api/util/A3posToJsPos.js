"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const positionData_1 = __importDefault(require("./positionData"));
function A3PosToJsPos(pos, backGroundData) {
    let { bottomLeft, size, sizeFactor } = backGroundData;
    if (size > 2000) {
        bottomLeft = (0, positionData_1.default)(bottomLeft).gridPos;
    }
    ;
    const [x, y] = pos;
    const [bX, bY] = bottomLeft;
    const xx = (x - bX) - 112;
    const yy = size - (y - bY);
    const imgPos = [xx / sizeFactor, yy / sizeFactor];
    return imgPos;
}
exports.default = A3PosToJsPos;
;
