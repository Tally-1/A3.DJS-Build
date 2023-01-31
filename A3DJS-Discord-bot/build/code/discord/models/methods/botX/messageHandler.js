"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cleanString_1 = __importDefault(require("../../../../api/models/methods/INIparser/cleanString"));
const botX_1 = __importDefault(require("../../classes/botX"));
function messageHandler(message) {
    const bot = message.client;
    if (bot.A3Channels === undefined) {
        return;
    }
    ;
    const valid = botX_1.default.validMessage(message, bot.A3Channels);
    if (!valid) {
        return;
    }
    ;
    message.content = (0, cleanString_1.default)(message.content);
    botX_1.default.sendChatToArmA(message, bot.A3DJS_folder);
}
exports.default = messageHandler;
;
