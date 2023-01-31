"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function hasChanged(updateOnchange) {
    const { sessionName } = this.parseSessionFile();
    const changed = sessionName !== this.sessionName;
    if (changed && updateOnchange) {
        this.update();
    }
    ;
    return changed;
}
exports.default = hasChanged;
;
