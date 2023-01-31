"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cleanUp_1 = __importDefault(require("../methods/livefeed/cleanUp"));
const deletePreviousImg_1 = __importDefault(require("../methods/livefeed/deletePreviousImg"));
const initLiveFeed_1 = __importDefault(require("../methods/livefeed/initLiveFeed"));
const initTransmission_1 = __importDefault(require("../methods/livefeed/initTransmission"));
const newGame_1 = __importDefault(require("../methods/livefeed/newGame"));
const sendSnapImg_1 = __importDefault(require("../methods/livefeed/sendSnapImg"));
const updateTransmission_1 = __importDefault(require("../methods/livefeed/updateTransmission"));
class LiveFeed {
    constructor(bot, sessionData) {
        this.initTransmission = initTransmission_1.default;
        this.updateTransmission = updateTransmission_1.default;
        this.newGame = newGame_1.default;
        this.sendSnapImg = sendSnapImg_1.default;
        this.deletePreviousImg = deletePreviousImg_1.default;
        this.cleanUp = cleanUp_1.default;
        const A3Channels = bot.A3Channels;
        this.sessionData = sessionData;
        this.bot = bot;
        this.chatChannel = A3Channels.chatChannel;
        this.liveChannel = A3Channels.liveChannel;
        this.imageChannel = A3Channels.imgChannel;
        this.previousImageMsg = undefined;
        this.sendingImage = false;
        this.updateFrequency = 5000;
        this.lastImgOutTime = new Date().getTime() - (this.updateFrequency); //@ts-expect-error
        this.snapshot = process.state.currentSnap;
    }
    ;
}
exports.default = LiveFeed;
LiveFeed.initLiveFeed = initLiveFeed_1.default;
;
