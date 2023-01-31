"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function cleanString(text) {
    const letters = text.split("");
    const filtered = [];
    for (const letter of letters) {
        if (letter !== "'") {
            filtered.push(letter);
        }
        else {
            filtered.push("`");
        }
        ;
    }
    ;
    const newText = filtered.join("");
    return newText;
}
exports.default = cleanString;
