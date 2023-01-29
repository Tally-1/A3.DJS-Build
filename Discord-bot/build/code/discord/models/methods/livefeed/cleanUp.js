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
function cleanUp(channel) {
    return __awaiter(this, void 0, void 0, function* () {
        const messages = yield channel.messages.fetch({ limit: 100 });
        if (messages.size === 0) {
            return;
        }
        ;
        console.log("Deleting " + messages.size + " messages in " + channel.name + ".");
        messages.map((msg) => __awaiter(this, void 0, void 0, function* () {
            if (!msg) {
                return;
            }
            ;
            if (!msg.deletable) {
                return;
            }
            ;
            try {
                yield msg.delete();
            }
            catch (e) { }
            ;
        }));
    });
}
exports.default = cleanUp;
