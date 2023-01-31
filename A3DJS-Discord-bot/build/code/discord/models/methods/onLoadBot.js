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
const INIparser_1 = __importDefault(require("../../../api/models/classes/INIparser"));
const chatBrain_1 = __importDefault(require("../classes/chatBrain"));
const getA3Channels_1 = __importDefault(require("./chatBrain/getA3Channels"));
// import { reloadSlashCommand } from "../../../api/models/methods/INIparser/requestHandler";
function onLoadBot(bot) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const chatBrain = new chatBrain_1.default(bot);
        (0, getA3Channels_1.default)(bot, true);
        const server = yield ((_a = (yield bot.guilds.fetch()).get(bot.config.serverId)) === null || _a === void 0 ? void 0 : _a.fetch());
        // console.log(server?.icon);
        //@ts-expect-error
        bot.discordServer = server;
        bot.on("messageCreate", chatBrain.messageHandler);
        startUpMessage(bot);
    });
}
exports.default = onLoadBot;
;
//request: ["target", "sender", "RequestId", "stringParam"]
//response:[[_callId, _callStatus, _responseData], "response"]
//syschat example:
//('["", "sender",1234, "A lil chat"]', "syschat-global", folder)
function startUpMessage(bot) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const botName = (_a = bot.user) === null || _a === void 0 ? void 0 : _a.username; //@ts-expect-error
        const serverName = bot.discordServer.name;
        const message = INIparser_1.default.cleanString(botName + ' connected at ' + serverName);
        const callId = "-1";
        const requestRaw = [
            "",
            botName,
            callId,
            message
        ];
        INIparser_1.default.sendCommand(requestRaw, "syschat-global", bot.A3DJS_folder);
        console.log(((_b = bot.user) === null || _b === void 0 ? void 0 : _b.username) + " loaded");
    });
}
