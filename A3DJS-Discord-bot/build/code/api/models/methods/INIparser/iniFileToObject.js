"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const parseINIString_1 = __importDefault(require("./parseINIString"));
function iniFileToObject(folder, fileName) {
    const file = path_1.default.join(folder, fileName + ".ini");
    const string = fs_1.default.readFileSync(file, 'utf8')
        .replace('Init=""---""', '');
    const parsedString = (0, parseINIString_1.default)(string);
    const data = parsedString[fileName];
    return data;
}
exports.default = iniFileToObject;
;
