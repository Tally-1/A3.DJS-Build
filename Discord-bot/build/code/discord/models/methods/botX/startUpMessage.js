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
const INIparser_1 = __importDefault(require("../../../../api/models/classes/INIparser"));
function startUpMessage() {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const botName = (_a = this.user) === null || _a === void 0 ? void 0 : _a.username;
        const serverName = (_b = this.discordServer) === null || _b === void 0 ? void 0 : _b.name;
        const message = INIparser_1.default.cleanString(botName + ' connected at ' + serverName);
        const callId = "-1";
        const requestRaw = [
            "",
            botName,
            callId,
            message
        ];
        INIparser_1.default.sendCommand(requestRaw, "syschat-global", this.A3DJS_folder);
        console.log(((_c = this.user) === null || _c === void 0 ? void 0 : _c.username) + " loaded");
    });
}
exports.default = startUpMessage;
