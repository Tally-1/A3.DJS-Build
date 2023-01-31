"use strict";
// An slightly edited version of code found at: 
// https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
function deployCommands(commands, rest) {
    (() => __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`);
            // The put method is used to fully refresh all commands in the guild with the current set
            const data = yield rest.put(discord_js_1.Routes.applicationGuildCommands(this.config.botId, this.config.serverId), { body: commands });
            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        }
        catch (error) {
            console.error(error);
        }
    }))();
}
exports.default = deployCommands;
;
