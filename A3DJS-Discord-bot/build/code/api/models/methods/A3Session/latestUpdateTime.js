"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const parseINIString_1 = __importDefault(require("../INIparser/parseINIString"));
function latestUpdateTime() {
    const string = fs_1.default.readFileSync(this.timeFile, 'utf8');
    const pString = (0, parseINIString_1.default)(string);
    const object = pString.A3ToDJS_timeStamp;
    const time = +(JSON.parse(object.lastUpdate));
    return time;
}
exports.default = latestUpdateTime;
;
