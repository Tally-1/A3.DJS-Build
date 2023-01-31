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
const promises_1 = require("node:timers/promises");
function commandResponseReply(interaction, requestId, time, sendText) {
    return __awaiter(this, void 0, void 0, function* () {
        if (sendText === undefined) {
            sendText = 'Sending...';
        }
        ;
        try {
            yield interaction.deferReply({ ephemeral: true });
            yield interaction.editReply({ content: sendText });
            const response = yield this.getResponse(requestId, time);
            let replyText = "Could not verify server response.";
            if (response !== undefined) {
                const { responseCode, data } = response;
                replyText = responseCode;
                if (data !== undefined) {
                    return data;
                }
                ;
            }
            yield interaction.editReply(replyText);
            yield (0, promises_1.setTimeout)(5000);
            yield interaction.deleteReply();
        }
        catch (e) {
            const err = e;
            if (err.code === 'InteractionAlreadyReplied') {
                console.log("Double-reply / reply failed. \n may also be caused by a unrelated syntax error in the command");
            }
        }
        ;
    });
}
exports.default = commandResponseReply;
;
