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
const LiveFeed_1 = __importDefault(require("../../classes/LiveFeed"));
function newGame(sendReport) {
    return __awaiter(this, void 0, void 0, function* () {
        this.previousImageMsg = undefined;
        //@ts-expect-error 
        const sessionData = process.state.session;
        const newFeed = yield LiveFeed_1.default.initLiveFeed(sessionData);
        yield (newFeed === null || newFeed === void 0 ? void 0 : newFeed.initTransmission());
        if (sendReport) {
            yield this.chatChannel.send("```New Game Started!```");
            yield reportVersion(this, sessionData);
        }
        ;
        return newFeed;
    });
}
exports.default = newGame;
;
function reportVersion(livefeed, sessionData) {
    return __awaiter(this, void 0, void 0, function* () {
        const botVersion = livefeed.bot.version;
        const Arma3Version = sessionData.version;
        if (botVersion < Arma3Version) {
            console.log("Versions do not match between A3 and DJS, please update the build-folder");
            yield livefeed.chatChannel.send("```You need to update the buildfolder of you bot. \nA new version is available.```");
            //sys-info message-fnc might be needed.
            const request1 = [
                "",
                "A3.DJS",
                "-1",
                "A3.DJS: -Versions do not match between A3 and DJS, please update the build-folder."
            ];
            const request2 = [
                "",
                "A3.DJS",
                "-1",
                "A3.DJS: bot-version: " + botVersion + " A3.DJS version: " + Arma3Version
            ];
            INIparser_1.default.sendCommand(request1, "syschat-global", livefeed.bot.A3DJS_folder);
            INIparser_1.default.sendCommand(request2, "syschat-global", livefeed.bot.A3DJS_folder);
        }
    });
}
