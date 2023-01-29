"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cleanString_1 = __importDefault(require("./cleanString"));
function stringifyStrArr(arr) {
    let strArr = "[";
    for (let i = 0; i < arr.length; i++) {
        const rawEl = arr[i];
        let element = (0, cleanString_1.default)(rawEl);
        const lastEl = i === (arr.length - 1);
        let newEl = "'" + element + "',";
        if (lastEl) {
            newEl = "'" + element + "'";
        }
        ;
        strArr = strArr + newEl;
    }
    ;
    strArr = strArr + "]";
    return strArr;
}
exports.default = stringifyStrArr;
;
