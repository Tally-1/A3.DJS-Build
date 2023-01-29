"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getA3Channels_1 = __importDefault(require("../methods/chatBrain/getA3Channels"));
const buildChannel_1 = __importDefault(require("../methods/chatBrain/buildChannel"));
const constructMissingChannels_1 = __importDefault(require("../methods/chatBrain/constructMissingChannels"));
const messageHandler_1 = __importDefault(require("../methods/chatBrain/messageHandler"));
const sendChatToArmA_1 = __importDefault(require("../methods/chatBrain/sendChatToArmA"));
const validMessage_1 = __importDefault(require("../methods/chatBrain/validMessage"));
const sendChatToDiscord_1 = __importDefault(require("../methods/chatBrain/sendChatToDiscord"));
class ChatBrain {
    constructor(bot) {
        this.messageHandler = messageHandler_1.default;
        const time = new Date().getTime();
        this.lastMsgToArma = time;
        this.lastMsgToDiscord = time;
        this.bot = bot;
        //@ts-expect-error
        bot.ChatBrain = this;
    }
}
exports.default = ChatBrain;
ChatBrain.sendChatToArmA = sendChatToArmA_1.default;
ChatBrain.validMessage = validMessage_1.default;
ChatBrain.sendChatToDiscord = sendChatToDiscord_1.default;
ChatBrain.constructMissingChannels = constructMissingChannels_1.default;
ChatBrain.getA3Channels = getA3Channels_1.default;
ChatBrain.buildChannel = buildChannel_1.default;
