"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function getLatestKillText(snapshot, textSize, timeLimit, playersOnly) {
    const latestKill = this.getLatestKill(timeLimit, playersOnly);
    if (!latestKill) {
        return;
    }
    ;
    if (this.latestKillText && this.latestKillText.id === latestKill.victimId) {
        return this.latestKillText.text;
    }
    ;
    const latestKillTxt = latestKill.killText(snapshot, textSize);
    if (!latestKillTxt) {
        return;
    }
    ;
    this.latestKillText = { id: latestKill.victimId, text: latestKillTxt };
    return latestKillTxt;
}
exports.default = getLatestKillText;
;
