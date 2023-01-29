"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Cap1(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function (word) {
        return word[0].toUpperCase() + word.substr(1);
    })
        .join(' ');
}
exports.default = Cap1;
