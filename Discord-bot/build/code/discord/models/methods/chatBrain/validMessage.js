"use strict";
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
