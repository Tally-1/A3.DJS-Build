"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const positionData_1 = __importDefault(require("./positionData"));
function roundBottomLeft(A3position, areaSize, exactPos) {
    if (exactPos) {
        return [A3position[0] - (areaSize / 2), A3position[1] - (areaSize / 2)];
    }
    ;
    const bottomLeftCorner = (0, positionData_1.default)([A3position[0] - (areaSize / 2), A3position[1] - (areaSize / 2)]).round100;
    return bottomLeftCorner;
}
exports.default = roundBottomLeft;
;
