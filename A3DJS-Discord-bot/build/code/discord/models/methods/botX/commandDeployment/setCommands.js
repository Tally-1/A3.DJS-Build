"use strict";
// An slightly edited version of code found at: 
// https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
function setCommands() {
    const rest = new discord_js_1.REST({ version: '10' }).setToken(this.config.token);
    const commands = this.getCommandsData();
    this.registerCommands();
    this.deployCommands(commands, rest);
    this.on(discord_js_1.Events.InteractionCreate, this.actionHandler);
}
exports.default = setCommands;
;
