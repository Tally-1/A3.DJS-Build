"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const INIparser_1 = __importDefault(require("../../../../api/models/classes/INIparser"));
function sendChatToArmA(message, folder) {
    // const isOwner = message.guild?.ownerId == message.author.id;    
    const sender = message.author.username;
    if (message.author.id === "168126325670805506") {
        message.content = "I am sorry for my behavior, I will try to be better.";
    }
    ;
    console.log("");
    console.log("----------chat message---------");
    console.log('Discord->Arma: "' + sender + '": ' + message.content);
    console.log("-------------------------------");
    const command = "discord-chat";
    const target = "";
    const requestId = (new Date().getTime().toString());
    const request = [
        target,
        sender,
        requestId,
        message.content
    ];
    INIparser_1.default.sendCommand(request, command, folder);
}
exports.default = sendChatToArmA;
;
