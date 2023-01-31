"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const INIparser_1 = __importDefault(require("../../../../api/models/classes/INIparser"));
function sendChatToArmA(message, folder) {
    var _a;
    const isOwner = ((_a = message.guild) === null || _a === void 0 ? void 0 : _a.ownerId) == message.author.id;
    const sender = message.author.username;
    const text = message.content;
    let tag = "";
    if (isOwner) {
        tag = "(Admin)";
    }
    ;
    const command = "discord-chat";
    // const params = "["+
    //                 "'"+name+"',"+
    //                 "'"+tag+"',"+
    //                 "'"+text+"'"+
    //                 "]";
    // console.log(params);
    const target = "";
    const requestId = (new Date().getTime().toString());
    const request = [
        target,
        sender,
        requestId,
        text
    ];
    INIparser_1.default.sendCommand(request, command, folder);
}
exports.default = sendChatToArmA;
;
