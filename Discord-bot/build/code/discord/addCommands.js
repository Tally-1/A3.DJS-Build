"use strict";
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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function addCommands(bot, config) {
    //@ts-expect-error
    bot.commands = new discord_js_1.Collection();
    const guildId = config.serverId;
    const clientId = config.botId;
    const token = config.token;
    const commandDir = path_1.default.join(__dirname, "commands");
    const commands = [];
    // Grab all the command files from the commands directory you created earlier
    const commandFiles = fs_1.default.readdirSync(commandDir).filter(file => file.endsWith('.js'));
    // console.log(commandFiles);
    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        commands.push(command.data.toJSON());
    }
    // Construct and prepare an instance of the REST module
    const rest = new discord_js_1.REST({ version: '10' }).setToken(token);
    // and deploy your commands!
    (() => __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`);
            // The put method is used to fully refresh all commands in the guild with the current set
            const data = yield rest.put(discord_js_1.Routes.applicationGuildCommands(clientId, guildId), { body: commands });
            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        }
        catch (error) {
            // And of course, make sure you catch and log any errors!
            console.error(error);
        }
    }))();
    for (const file of commandFiles) {
        const filePath = path_1.default.join(commandDir, file);
        const command = require(filePath);
        // Set a new item in the Collection with the key as the command name and the value as the exported module
        if ('data' in command && 'execute' in command) {
            console.log(command.execute);
            //@ts-expect-error
            bot.commands.set(command.data.name, command);
        }
        else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
        ;
        // //@ts-expect-error
        // console.log(bot.commands);
    }
    ;
    bot.on(discord_js_1.Events.InteractionCreate, (interaction) => __awaiter(this, void 0, void 0, function* () {
        // if(interaction.isChatInputCommand() !== true){return;};
        interaction = interaction;
        if (interaction.commandName === 'ping') {
            yield interaction.reply({ content: 'Secret Pong!', ephemeral: true });
        }
        ;
        // //@ts-expect-error
        // const commands = bot.commands as unknown as Collection;
        // console.log();
        // interaction.execute();
        // //@ts-expect-error
        //bot.commands.data[interaction.commandName].execute();
    }));
    // */
    // process.exit();
}
exports.default = addCommands;
;
