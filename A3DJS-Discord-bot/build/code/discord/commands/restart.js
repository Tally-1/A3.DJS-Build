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
    .setName('restart')
    .setDescription('Does a server or mission restart.')
    .setDefaultMemberPermissions(0)
    .addStringOption(option => option.setName("restart-type")
    .setRequired(true)
    .setDescription('Select what kind of restart you want to do.')
    .addChoices({ name: 'mission-restart', value: 'mission' }, { name: 'server-restart', value: 'server' }))
    .addStringOption(option => option
    .setName('password')
    .setRequired(true)
    .setDescription('Server Command Password')
    .setMinLength(1));
module.exports = {
    data: command,
    execute(interaction) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const type = (_a = interaction.options.get("restart-type")) === null || _a === void 0 ? void 0 : _a.value;
            const password = (_b = interaction.options.get("password")) === null || _b === void 0 ? void 0 : _b.value;
            if (type !== undefined && password !== undefined) {
                const { time, requestId, sender, bot } = botX_1.default.interactionBaseData(interaction);
                const target = type;
                const request = [
                    target,
                    sender,
                    requestId,
                    password
                ];
                INIparser_1.default.sendCommand(request, "restart", bot.A3DJS_folder);
                yield bot.commandResponseReply(interaction, requestId, time, "Restarting " + type);
            }
        });
    },
};
