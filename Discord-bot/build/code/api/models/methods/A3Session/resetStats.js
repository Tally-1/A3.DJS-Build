"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function resetStats() {
    this.stats = {
        kills: {},
        explosions: {},
        shotsFired: 0
    };
}
exports.default = resetStats;
