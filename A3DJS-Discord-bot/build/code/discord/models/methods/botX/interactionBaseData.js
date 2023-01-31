"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function interactionBaseData(interaction) {
    const time = new Date().getTime();
    const requestId = time.toString();
    const sender = interaction.user.tag;
    const bot = interaction.client;
    return {
        time: time,
        requestId: requestId,
        sender: sender,
        bot: bot
    };
}
exports.default = interactionBaseData;
;
