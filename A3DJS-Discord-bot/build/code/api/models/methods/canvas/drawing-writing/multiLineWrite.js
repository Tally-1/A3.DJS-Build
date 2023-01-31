"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function multiLineWrite(pencil, startPos, lineSpace, lines, color) {
    let [x, y] = startPos;
    const originalColor = pencil.fillStyle.valueOf();
    if (color) {
        pencil.fillStyle = color;
    }
    ;
    for (const text of lines) {
        pencil.fillText(text, x, y);
        y = y + lineSpace;
    }
    pencil.fillStyle = originalColor;
}
exports.default = multiLineWrite;
;
