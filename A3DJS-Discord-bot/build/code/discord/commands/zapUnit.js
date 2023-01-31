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
    .setName('zap-unit')
    .setDescription('Send a gift from the sky to a soldier of your choice...')
    .addBooleanOption(option => option
    .setName("players-only")
    .setDescription("Look for players only?")
    .setRequired(true))
    .addStringOption(option => option
    .setName("unit")
    .setDescription("Select victim...")
    .setRequired(true)
    .setAutocomplete(true));
function autocomplete(interaction) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bot = interaction.client;
            const playersOnly = (_a = interaction.options.get("players-only")) === null || _a === void 0 ? void 0 : _a.value;
            const focusedValue = interaction.options.getFocused();
            const choices = bot.getSnapshot().getNames(playersOnly);
            const filtered = choices.filter(choice => choice.startsWith(focusedValue));
            yield interaction.respond(filtered.map(choice => ({ name: choice, value: choice })));
        }
        catch (error) {
            console.log(error);
            console.log("autoCompletion on player-search failed");
        }
    });
}
;
function reply(interaction) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { time, requestId, sender, bot } = botX_1.default.interactionBaseData(interaction);
        const target = (_a = interaction.options.get("unit")) === null || _a === void 0 ? void 0 : _a.value;
        const request = [
            target,
            sender,
            requestId
        ];
        INIparser_1.default.sendCommand(request, "zap-unit", bot.A3DJS_folder);
        yield bot.commandResponseReply(interaction, requestId, time, "Zapping " + target + "....");
    });
}
module.exports = {
    data: command,
    autocomplete: autocomplete,
    execute: reply,
};
