"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function write(pencil, text, pos, color) {
    const originalColor = pencil.fillStyle.valueOf();
    if (color) {
        pencil.fillStyle = color;
    }
    ;
    pencil.fillText(text, pos[0], pos[1]);
    pencil.fillStyle = originalColor;
}
exports.default = write;
