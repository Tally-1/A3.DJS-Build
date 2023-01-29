"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function average(numArr) {
    let sum = 0;
    for (const value of numArr) {
        if (typeof value == "number") {
            sum = sum + value;
        }
    }
    if (sum == 0) {
        return 0;
    }
    const average = Math.round(sum / numArr.length);
    return average;
}
exports.default = average;
