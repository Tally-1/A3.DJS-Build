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
const discord_js_1 = require("discord.js");
const fs_1 = __importDefault(require("fs"));
const promises_1 = require("node:timers/promises");
class BotX extends discord_js_1.Client {
    constructor(folder, configFile) {
        super({ intents: ["Guilds", "GuildMessages", "DirectMessages", "MessageContent"] });
        const jsonConfig = fs_1.default.readFileSync(configFile);
        const config = JSON.parse(jsonConfig);
        this.commands = new discord_js_1.Collection();
        this.startUpTime = new Date().getTime();
        this.A3DJS_folder = folder;
        this.config = config;
        this.configFile = configFile;
    }
    getResponse(requestId, time) {
        return __awaiter(this, void 0, void 0, function* () {
            const sessionData = this.sessionData;
            let response = sessionData === null || sessionData === void 0 ? void 0 : sessionData.responses[requestId];
            let responseFound = false;
            let timedOut = false;
            while (responseFound === false && timedOut === false) {
                const sessionData = this.sessionData;
                const curTime = new Date().getTime();
                response = sessionData === null || sessionData === void 0 ? void 0 : sessionData.responses[requestId];
                responseFound = response !== undefined;
                timedOut = curTime > (time + 10000);
                yield (0, promises_1.setTimeout)(100);
            }
            ;
            return response;
        });
    }
    ;
    commandResponseReply(interaction, requestId, time) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield interaction.deferReply({ ephemeral: true });
                yield interaction.editReply({ content: 'Sending...' });
                const response = yield this.getResponse(requestId, time);
                let replyText = "Could not verify server response.";
                if (response !== undefined) {
                    const { responseCode, data } = response;
                    replyText = responseCode;
                }
                yield interaction.editReply(replyText);
                yield (0, promises_1.setTimeout)(5000);
                yield interaction.deleteReply();
            }
            catch (e) {
                const err = e;
                if (err.code === 'InteractionAlreadyReplied') {
                    console.log("Double-reply / reply failed. \n may also be caused by a unrelated syntax error in the command");
                }
            }
            ;
        });
    }
    ;
    getSnapshot() {
        //@ts-expect-error
        return process.state.currentSnap;
    }
}
exports.default = BotX;
