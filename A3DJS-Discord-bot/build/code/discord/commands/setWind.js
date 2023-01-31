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
    .setName('set-wind')
    .setDescription('Sets the wind level on your ArmA 3 server')
    .setDefaultMemberPermissions(0)
    .addIntegerOption(option => option
    .setName("percentage")
    .setDescription("0 -> 100%")
    .setMaxValue(100)
    .setMinValue(0)
    .setRequired(true));
module.exports = {
    data: command,
    execute(interaction) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const level = (_a = interaction.options.get("percentage")) === null || _a === void 0 ? void 0 : _a.value;
            if (level !== undefined) {
                const { time, requestId, sender, bot } = botX_1.default.interactionBaseData(interaction);
                const target = "";
                const request = [
                    target,
                    sender,
                    requestId,
                    level.toString()
                ];
                INIparser_1.default.sendCommand(request, "set-wind", bot.A3DJS_folder);
                yield bot.commandResponseReply(interaction, requestId, time, "Setting wind-level...");
            }
        });
    },
};
