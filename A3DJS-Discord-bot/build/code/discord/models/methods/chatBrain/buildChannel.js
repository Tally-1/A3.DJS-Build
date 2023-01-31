"use strict";
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
function buildChannel(bot, name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //@ts-expect-error
            const server = yield bot.guilds.fetch(bot.config.serverId);
            const channel = yield server.channels.create({
                name: name,
                type: 0,
                permissionOverwrites: [],
            });
            console.log('Created channel "' + name + '" on "' + server.name + '".');
            return channel;
        }
        catch (error) { //@ts-expect-error
            console.log('Channel creation failed' + error.code);
            return;
        }
    });
}
exports.default = buildChannel;
;
