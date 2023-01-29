"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getA3Channels_1 = __importDefault(require("./getA3Channels"));
function sendChatToDiscord(chatName, text, uid) {
    //@ts-expect-error
    const bot = process.bot;
    if (!bot) {
        return false;
    }
    ;
    //@ts-expect-error
    const timeSinceStartup = (new Date().getTime()) - bot.startUpTime;
    //time is needed to init bot properly.
    if (timeSinceStartup < 5000) {
        return false;
    }
    ;
    //@ts-expect-error
    const chatChannel = bot.A3Channels.chatChannel;
    if (!chatChannel) {
        //@ts-expect-error
        if (bot.channelsLoaded === undefined) {
            (0, getA3Channels_1.default)(bot);
            console.log("No chat channel found");
            return false;
        }
        ;
        console.log("No chat channel found");
        return false;
    }
    ;
    try {
        //@ts-expect-error
        const channel = bot.A3Channels.chatChannel;
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
