"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chatBrain_1 = __importDefault(require("../../classes/chatBrain"));
function getA3Channels(bot, assignToBot) {
    return __awaiter(this, void 0, void 0, function* () {
        //@ts-expect-error
        const config = bot.config;
        //the channelsLoaded notation is used in sendChatToDiscord.ts, in order to not loop channel-creation.
        //@ts-expect-error
        bot.channelsLoaded = false;
        const { chatChannel, liveChannel, imgChannel } = config;
        const channelIds = [chatChannel, liveChannel, imgChannel];
        const channelsToBuild = [];
        const returnChannels = [];
        for (let i = 0; i < channelIds.length; i++) {
            const id = channelIds[i];
            const name = config.channelNames[i];
            let channel = null;
            try {
                channel = yield bot.channels.fetch(id);
            }
            catch (e) { }
            ;
            if (channel) {
                returnChannels.push(channel);
            }
            else {
                channelsToBuild.push(name);
            }
            ;
        }
        ;
        if (returnChannels.length === 3) {
            const channels = {
                chatChannel: returnChannels[0],
                liveChannel: returnChannels[1],
                imgChannel: returnChannels[2]
            };
            //@ts-expect-error
            if (assignToBot) {
                bot.A3Channels = channels;
            }
            ;
            //@ts-expect-error
            bot.channelsLoaded = true;
            console.log("All channels ready, listening....");
            return channels;
        }
        ;
        const channels = yield chatBrain_1.default.constructMissingChannels(bot, channelsToBuild);
        //@ts-expect-error
        bot.channelsLoaded = true;
        //@ts-expect-error
        if (assignToBot) {
            bot.A3Channels = channels;
        }
        ;
        return channels;
    });
}
exports.default = getA3Channels;
;
