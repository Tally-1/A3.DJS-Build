"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function sendChatToDiscord(chatName, text, _uid) {
    var _a, _b;
    //@ts-expect-error
    const bot = process.bot;
    if (!bot) {
        return false;
    }
    ;
    const timeSinceStartup = (new Date().getTime()) - bot.startUpTime;
    //time is needed to init bot properly.
    if (timeSinceStartup < 5000) {
        return false;
    }
    ;
    const chatChannel = (_a = bot.A3Channels) === null || _a === void 0 ? void 0 : _a.chatChannel;
    if (!chatChannel) {
        if (bot.channelsLoaded === undefined) {
            bot.getA3Channels();
            console.log("No chat channel found");
            return false;
        }
        ;
        console.log("No chat channel found");
        return false;
    }
    ;
    try {
        const channel = (_b = bot.A3Channels) === null || _b === void 0 ? void 0 : _b.chatChannel;
        let message = "```json\n " + chatName + ": " + '"' + text + '"' + "```";
        if (chatName === "") {
            message = text;
        }
        ;
        channel.send(message);
        return true;
    }
    catch (error) {
        console.log("Could not send message to Discord" + "\n" + error);
        return false;
    }
}
exports.default = sendChatToDiscord;
;
