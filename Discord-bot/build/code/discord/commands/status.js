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
const promises_1 = require("node:timers/promises");
const botX_1 = __importDefault(require("../models/classes/botX"));
const command = new discord_js_1.SlashCommandBuilder()
    .setName('status-player')
    .setDescription('Gets the status of a player')
    .addStringOption(option => option
    .setName("player")
    .setDescription("name...")
    .setRequired(true)
    .setAutocomplete(true));
function autocomplete(interaction) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bot = interaction.client;
            const focusedValue = interaction.options.getFocused();
            const choices = bot.getSnapshot().getNames(true);
            const filtered = choices.filter(choice => choice.toLowerCase().startsWith(focusedValue.toLowerCase()));
            yield interaction.respond(filtered.map(choice => ({ name: choice, value: choice })));
        }
        catch (error) {
            console.log("autoCompletion on player-search failed");
        }
    });
}
;
function reply(interaction) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { time, requestId, sender, bot } = botX_1.default.interactionBaseData(interaction);
        const target = (_a = interaction.options.get("player")) === null || _a === void 0 ? void 0 : _a.value;
        const request = [
            target,
            sender,
            requestId
        ];
        INIparser_1.default.sendCommand(request, "get-unit-status", bot.A3DJS_folder);
        const data = yield bot.commandResponseReply(interaction, requestId, time, 'Getting status of ' + target + '...');
        if (data === undefined) {
            return;
        }
        ;
        const [damage, gear] = data;
        const [uniform, backPack, vest, weapon, launcher, sideArm] = gear;
        const unitStatus = "```" +
            "Health: " + Math.round(100 - (damage * 100)) + "%\n" +
            "Weapon: " + weapon + "\n" +
            "Launcher: " + launcher + "\n" +
            "SideArm: " + sideArm + "\n\n" +
            "Vest: " + vest + "\n" +
            "Uniform: " + uniform + "\n" +
            "BackPack: " + backPack + "\n" +
            "```";
        yield interaction.editReply({ content: unitStatus });
        yield (0, promises_1.setTimeout)(30000);
        try {
            yield interaction.deleteReply();
        }
        catch (e) { }
        return;
    });
}
module.exports = {
    data: command,
    autocomplete: autocomplete,
    execute: reply,
};
