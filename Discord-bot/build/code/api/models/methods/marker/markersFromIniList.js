"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const marker_1 = __importDefault(require("../../classes/marker"));
function markersFromIniList(iniListObj) {
    const ids = Object.keys(iniListObj);
    const objects = {};
    for (const id of ids) {
        const dataArr = iniListObj[id];
        const finalData = [id, ...dataArr];
        const newObj = new marker_1.default(...finalData);
        objects[id] = newObj;
    }
    ;
    return objects;
}
exports.default = markersFromIniList;
