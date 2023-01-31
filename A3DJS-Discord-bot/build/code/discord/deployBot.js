"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const botX_1 = __importDefault(require("./models/classes/botX"));
function deployBot(folder, configFile, version) {
    const bot = new botX_1.default(folder, configFile, version);
    //@ts-expect-error
    process.bot = bot;
    bot.setCommands();
    bot.login(bot.config.token);
    bot.once("ready", bot.onLoadBot);
    return bot;
}
exports.default = deployBot;
;
