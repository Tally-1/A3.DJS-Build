"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function actionText(feed, snapshot) {
    var _a;
    const text = (_a = feed.sessionData) === null || _a === void 0 ? void 0 : _a.getLatestKillText(snapshot, "short", 20000);
    if (text) {
        this.addFields({ name: "\n", value: "```" + text + "```" });
    }
    ;
    return this;
}
exports.default = actionText;
