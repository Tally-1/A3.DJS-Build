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
const buildChannel_1 = __importDefault(require("./buildChannel"));
const storeJsonPretty_1 = __importDefault(require("../../../util/storeJsonPretty"));
function constructMissingChannels(bot, channelsToBuild) {
    return __awaiter(this, void 0, void 0, function* () {
        //@ts-expect-error
        const config = bot.config;
        const channels = {};
        const [chat, live, image] = config.channelNames;
        for (const name of channelsToBuild) {
            const channel = yield (0, buildChannel_1.default)(bot, name);
            if (channel) {
                if (name === chat) {
                    channels.chatChannel = channel;
                    config.chatChannel = channel.id;
                }
                ;
                if (name === live) {
                    channels.liveChannel = channel;
                    config.liveChannel = channel.id;
                }
                ;
                if (name === image) {
                    channels.imgChannel = channel;
                    config.imgChannel = channel.id;
                }
                ;
            }
            ;
        }
        ;
        (0, storeJsonPretty_1.default)(bot.configFile, config);
        return channels;
    });
}
exports.default = constructMissingChannels;
