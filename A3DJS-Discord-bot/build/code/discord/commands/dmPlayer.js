"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
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
const INIparser_1 = __importDefault(require("../../api/models/classes/INIparser"));
const botX_1 = __importDefault(require("../models/classes/botX"));
const command = new discord_js_1.SlashCommandBuilder()
    .setName('player-dm')
    .setDescription('Send private message to player')
    .addStringOption(option => option
    .setName("player")
    .setDescription("name...")
    .setRequired(true)
    .setAutocomplete(true))
    .addStringOption(option => option
    .setName("message")
    .setDescription("Write something...")
    .setRequired(true)
    .setMinLength(3)
    .setMaxLength(300));
function autocomplete(interaction) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bot = interaction.client;
            const focusedValue = interaction.options.getFocused();
            const choices = bot.getSnapshot().getNames(true);
            const filtered = choices.filter(choice => choice.startsWith(focusedValue));
            yield interaction.respond(filtered.map(choice => ({ name: choice, value: choice })));
        }
        catch (error) {
            // //@ts-expect-error
            console.log(error);
            console.log("autoCompletion on player-search failed");
        }
    });
}
;
function reply(interaction) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const { time, requestId, sender, bot } = botX_1.default.interactionBaseData(interaction);
        const target = (_a = interaction.options.get("player")) === null || _a === void 0 ? void 0 : _a.value;
        const text = (_b = interaction.options.get("message")) === null || _b === void 0 ? void 0 : _b.value;
        const request = [
            target,
            sender,
            requestId,
            text
        ];
        INIparser_1.default.sendCommand(request, "dm-player", bot.A3DJS_folder);
        yield bot.commandResponseReply(interaction, requestId, time);
        return;
    });
}
module.exports = {
    data: command,
    autocomplete: autocomplete,
    execute: reply,
};
