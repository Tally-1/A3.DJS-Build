"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendChatToDiscord_1 = __importDefault(require("../../../../discord/models/methods/botX/sendChatToDiscord"));
function requestHandler(commandType, params, sessionData) {
    if (commandType === "chat") {
        const args = params;
        (0, sendChatToDiscord_1.default)(...args);
    }
    ;
    if (commandType === "player-connection") {
        const args = params;
        playerConectMsg(...args);
        //add action feed plug here
    }
    ;
    if (commandType === "response") {
        const [requestId, responseCode, responseData] = params;
        sessionData.responses[requestId] = {
            responseCode: responseCode,
            data: responseData
        };
    }
    ;
}
exports.default = requestHandler;
;
function playerConectMsg(name, uid, status) {
    const chatName = "";
    const text = "```\n" + name + " Has " + status + " the server!```";
    (0, sendChatToDiscord_1.default)(chatName, text, uid);
}
;
