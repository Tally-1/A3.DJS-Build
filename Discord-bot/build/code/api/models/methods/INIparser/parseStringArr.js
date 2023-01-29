"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function parseStringArr(string, count) {
    if (count === undefined) {
        count = 1;
    }
    ;
    const lastLetter = string.length - count;
    const newString = string.substring(count, lastLetter);
    const array = JSON.parse(newString);
    return array;
}
exports.default = parseStringArr;
;
