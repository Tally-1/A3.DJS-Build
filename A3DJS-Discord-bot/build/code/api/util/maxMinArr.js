"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minOfArray = exports.maxOfArray = void 0;
function maxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
exports.maxOfArray = maxOfArray;
function minOfArray(numArray) {
    return Math.min.apply(null, numArray);
}
exports.minOfArray = minOfArray;
