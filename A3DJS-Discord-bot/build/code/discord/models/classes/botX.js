"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const fs_1 = __importDefault(require("fs"));
const snapshot_1 = __importDefault(require("../../../api/models/classes/snapshot"));
const getResponse_1 = __importDefault(require("../methods/botX/getResponse"));
const commandResponseReply_1 = __importDefault(require("../methods/botX/commandResponseReply"));
const interactionBaseData_1 = __importDefault(require("../methods/botX/interactionBaseData"));
const messageHandler_1 = __importDefault(require("../methods/botX/messageHandler"));
const buildChannel_1 = __importDefault(require("../methods/botX/buildChannel"));
const constructMissingChannels_1 = __importDefault(require("../methods/botX/constructMissingChannels"));
const getA3Channels_1 = __importDefault(require("../methods/botX/getA3Channels"));
const sendChatToArmA_1 = __importDefault(require("../methods/botX/sendChatToArmA"));
const sendChatToDiscord_1 = __importDefault(require("../methods/botX/sendChatToDiscord"));
const validMessage_1 = __importDefault(require("../methods/botX/validMessage"));
const startUpMessage_1 = __importDefault(require("../methods/botX/startUpMessage"));
const onLoadBot_1 = __importDefault(require("../methods/botX/onLoadBot"));
const setCommands_1 = __importDefault(require("../methods/botX/commandDeployment/setCommands"));
const registerCommands_1 = __importDefault(require("../methods/botX/commandDeployment/registerCommands"));
const deployCommands_1 = __importDefault(require("../methods/botX/commandDeployment/deployCommands"));
const getCommandsData_1 = __importDefault(require("../methods/botX/commandDeployment/getCommandsData"));
const actionHandler_1 = __importDefault(require("../methods/botX/commandDeployment/actionHandler"));
class BotX extends discord_js_1.Client {
    constructor(folder, configFile, version) {
        super({ intents: ["Guilds", "GuildMessages", "DirectMessages", "MessageContent"] });
        this.getResponse = getResponse_1.default;
        this.commandResponseReply = commandResponseReply_1.default;
        this.getA3Channels = getA3Channels_1.default;
        this.messageHandler = messageHandler_1.default;
        this.startUpMessage = startUpMessage_1.default;
        this.onLoadBot = onLoadBot_1.default;
        this.setCommands = setCommands_1.default;
        this.registerCommands = registerCommands_1.default;
        this.deployCommands = deployCommands_1.default;
        this.getCommandsData = getCommandsData_1.default;
        this.actionHandler = actionHandler_1.default;
        const jsonConfig = fs_1.default.readFileSync(configFile);
        const config = JSON.parse(jsonConfig);
        this.commands = new discord_js_1.Collection();
        this.startUpTime = new Date().getTime();
        this.A3DJS_folder = folder;
        this.config = config;
        this.configFile = configFile;
        this.snapshot = snapshot_1.default.getCurrent(folder);
        this.channelsLoaded = false;
        this.version = version;
    }
    //@ts-expect-error
    getSnapshot() { return process.state.currentSnap; }
    ;
}
exports.default = BotX;
BotX.sendChatToArmA = sendChatToArmA_1.default;
BotX.sendChatToDiscord = sendChatToDiscord_1.default;
BotX.validMessage = validMessage_1.default;
BotX.constructMissingChannels = constructMissingChannels_1.default;
BotX.getA3Channels = getA3Channels_1.default;
BotX.buildChannel = buildChannel_1.default;
BotX.interactionBaseData = interactionBaseData_1.default;
;
