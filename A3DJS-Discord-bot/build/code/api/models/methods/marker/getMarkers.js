"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const INIparser_1 = __importDefault(require("../../classes/INIparser"));
const markersFromIniList_1 = __importDefault(require("./markersFromIniList"));
function getMarkers(folder) {
    const IniList = INIparser_1.default.iniFileToObject(folder, "A3ToDJS_markers");
    const markerData = INIparser_1.default.parseIniArrayList(IniList);
    const markers = (0, markersFromIniList_1.default)(markerData);
    return markers;
}
exports.default = getMarkers;
;
