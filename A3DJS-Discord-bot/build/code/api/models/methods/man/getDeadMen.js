"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const INIparser_1 = __importDefault(require("../../classes/INIparser"));
const menFromIniList_1 = __importDefault(require("./menFromIniList"));
function getDeadMen(folder) {
    const deathData = INIparser_1.default.iniFileToObject(folder, "A3ToDJS_deadMen");
    const deathIniList = INIparser_1.default.parseIniArrayList(deathData);
    const deadMen = (0, menFromIniList_1.default)(deathIniList);
    return deadMen;
}
exports.default = getDeadMen;
