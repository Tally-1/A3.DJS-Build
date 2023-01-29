"use strict";
// An slightly edited version of code found at: 
// https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function getCommandsData() {
    const commands = [];
    const commandPath = path_1.default.join(__dirname, "..", "..", "..", "..", 'commands');
    const commandFiles = fs_1.default.readdirSync(commandPath).filter(file => file.endsWith('.js'));
    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    for (const file of commandFiles) {
        const command = require(`${commandPath}/${file}`);
        if (command) {
            commands.push(command.data.toJSON());
        }
    }
    ;
    return commands;
}
exports.default = getCommandsData;
;
