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
const sleep_1 = __importDefault(require("../../../../api/util/sleep"));
const LiveFeed_1 = __importDefault(require("../../classes/LiveFeed"));
function initLiveFeed(sessionData) {
    return __awaiter(this, void 0, void 0, function* () {
        const bot = yield waitForBot();
        if (!bot) {
            return;
        }
        ;
        const feed = new LiveFeed_1.default(bot, sessionData);
        yield feed.cleanUp(feed.imageChannel);
        yield feed.cleanUp(feed.liveChannel);
        return feed;
    });
}
exports.default = initLiveFeed;
;
function waitForBot() {
    return __awaiter(this, void 0, void 0, function* () {
        let i = 0;
        //@ts-expect-error
        while (process.bot === undefined) {
            if (i >= 10) {
                console.log("Could not find bot, canceling live-feed.");
                return false;
            }
            ;
            yield (0, sleep_1.default)(1000);
            i++;
        }
        ;
        //@ts-expect-error
        const bot = process.bot;
        while (bot.A3Channels === undefined) {
            if (i >= 10) {
                console.log("Could not chat-channel, canceling live-feed.");
                return false;
            }
            ;
            yield (0, sleep_1.default)(1000);
            i++;
        }
        ;
        return bot;
    });
}
;
