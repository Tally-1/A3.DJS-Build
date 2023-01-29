"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const average_1 = __importDefault(require("./average"));
function avgPos(posArr) {
    if (posArr.length == 1) {
        const avgPos = [posArr[0][0], posArr[0][1]];
        return avgPos;
    }
    const xArr = [];
    const yArr = [];
    for (const pos of posArr) {
        xArr.push(pos[0]);
        yArr.push(pos[1]);
    }
    const x = (0, average_1.default)(xArr);
    const y = (0, average_1.default)(yArr);
    const avgPos = [x, y];
    return avgPos;
}
exports.default = avgPos;
