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
Object.defineProperty(exports, "__esModule", { value: true });
function onLoadBot() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        this.getA3Channels(true);
        const server = yield ((_a = (yield this.guilds.fetch()).get(this.config.serverId)) === null || _a === void 0 ? void 0 : _a.fetch());
        this.discordServer = server;
        this.on("messageCreate", this.messageHandler);
        this.startUpMessage();
    });
}
exports.default = onLoadBot;
;
