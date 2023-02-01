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
const liveEmbed_1 = __importDefault(require("../../classes/liveEmbed"));
const promises_1 = require("node:timers/promises");
function updateTransmission(snapshot) {
    return __awaiter(this, void 0, void 0, function* () {
        this.snapshot = snapshot;
        if (!this.liveMsgId) {
            return false;
        }
        ;
        const liveMessage = yield this.liveChannel.messages.fetch(this.liveMsgId);
        if (!liveMessage) {
            return false;
        }
        ;
        const imageUrl = yield this.sendSnapImg();
        //for some reason the embed is not edited after a while, even though the image is sent, testing to see if timout will fix it.
        yield (0, promises_1.setTimeout)(100);
        if (!imageUrl) {
            return false;
        }
        ;
        this.imageUrl = imageUrl;
        const newEmbed = new liveEmbed_1.default(this);
        yield liveMessage.edit({ content: "...", embeds: [] });
        yield liveMessage.edit({ embeds: [newEmbed] });
        return true;
    });
}
exports.default = updateTransmission;
;
