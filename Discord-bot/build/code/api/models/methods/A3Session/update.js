"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function update() {
    const sessionData = this.parseSessionFile();
    this.updateFrequency = sessionData.updateFrequency;
    this.sessionName = sessionData.sessionName;
    this.map = sessionData.map;
    this.mapData = sessionData.mapData;
    this.focusType = sessionData.focusType;
    this.focusEnemy = sessionData.focusEnemy;
}
exports.default = update;
