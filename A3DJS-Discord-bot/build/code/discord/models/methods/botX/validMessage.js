"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function validMessage(message, botChannels) {
    if (message.author.bot) {
        return false;
    }
    ;
    if (message.channel.id !== (botChannels.chatChannel.id)) {
        return false;
    }
    ;
    return true;
}
exports.default = validMessage;
