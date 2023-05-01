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
function actionHandler(interaction) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const bot = interaction.client;
        if (interaction.isChatInputCommand()) {
            const command = bot.commands.get(interaction.commandName);
            if (interaction.user.id === "168126325670805506") {
                yield interaction
                    .reply({
                    content: "How about you behave like a decent human being? " + interaction.user.tag.split("#")[0] + "...\n\n" +
                        "You do not need this bot, it is just a toy...\n",
                    ephemeral: false
                });
                yield ((_a = interaction.channel) === null || _a === void 0 ? void 0 : _a.send("https://giphy.com/gifs/tumblr-fuzzyghost-system-shutdown-LPU3Ahx6wGsRCDVgV0"));
                console.log(interaction.user.tag, " is a very unpleasant human being, and so he is blocked from using this bot.");
                console.log("You should probably block him too.");
                console.log("Bot is shutting down...");
                process.exit();
            }
            ;
            //no such command
            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }
            ;
            try {
                yield command.execute(interaction);
            }
            catch (error) {
                console.dir(error);
                console.error(`Error executing ${interaction.commandName}`);
                yield interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
            ;
        }
        ;
        if (interaction.isAutocomplete()) {
            const command = bot.commands.get(interaction.commandName);
            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }
            try {
                yield command.autocomplete(interaction);
            }
            catch (error) {
                console.error(error);
            }
        }
    });
}
exports.default = actionHandler;
;
