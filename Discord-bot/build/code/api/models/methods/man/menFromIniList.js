"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const man_1 = __importDefault(require("../../classes/man"));
function menFromIniList(iniListObj) {
    const ids = Object.keys(iniListObj);
    const men = {};
    for (const id of ids) {
        const dataArr = iniListObj[id];
        const finalData = [id, ...dataArr];
        const newObj = new man_1.default(...finalData);
        men[id] = newObj;
    }
    ;
    return men;
}
exports.default = menFromIniList;
;
module.exports = menFromIniList;
