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
function updateTransmission(snapshot) {
    return __awaiter(this, void 0, void 0, function* () {
        this.snapshot = snapshot;
        if (!this.liveMsgId) {
            return;
        }
        ;
        const liveMessage = yield this.liveChannel.messages.fetch(this.liveMsgId);
        if (!liveMessage) {
            return;
        }
        ;
        const imageUrl = yield this.sendSnapImg();
        if (!imageUrl) {
            return;
        }
        ;
        this.imageUrl = imageUrl;
        const newEmbed = new liveEmbed_1.default(this);
        yield liveMessage.edit("...");
        liveMessage.edit({ embeds: [newEmbed] });
    });
}
exports.default = updateTransmission;
;
