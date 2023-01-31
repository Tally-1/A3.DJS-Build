"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const INIparser_1 = __importDefault(require("../../classes/INIparser"));
function parseIniArrayList(listObject) {
    const keys = Object.keys(listObject);
    const newObject = {};
    for (const key of keys) {
        const string = listObject[key];
        let remove = 1;
        if (string.startsWith('""')) {
            remove = 2;
        }
        ;
        const value = INIparser_1.default.parseStringArr(string, remove);
        newObject[key] = value;
    }
    ;
    return newObject;
}
exports.default = parseIniArrayList;
;
