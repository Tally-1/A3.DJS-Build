"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function stateToProccess(session, snapshot) {
    //@ts-expect-error
    process.state = {
        session: session,
        currentSnap: snapshot,
        lastUpdate: new Date().getTime(),
    };
    //@ts-expect-error
    const bot = process.bot;
    if (bot !== undefined) {
        bot.sessionData = session;
        // bot.snapshot = snapshot;
    }
}
exports.default = stateToProccess;
