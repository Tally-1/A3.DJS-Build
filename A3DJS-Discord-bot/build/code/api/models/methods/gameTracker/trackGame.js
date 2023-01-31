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
const LiveFeed_1 = __importDefault(require("../../../../discord/models/classes/LiveFeed"));
const canvas_1 = __importDefault(require("../../classes/canvas"));
const gameTracker_1 = __importDefault(require("../../classes/gameTracker"));
const gameStateQuery_1 = __importDefault(require("./gameStateQuery"));
function trackGame(dbFolder) {
    return __awaiter(this, void 0, void 0, function* () {
        canvas_1.default.removeCachedFiles();
        const cleanUpFrequency = 120000;
        let cacheCleaned = 0;
        let timers = [];
        let lastCleanup = new Date().getTime();
        let { sessionInfo, cnvsX, knownMap } = gameTracker_1.default.newGame(dbFolder);
        let discordFeed = yield LiveFeed_1.default.initLiveFeed(sessionInfo);
        yield (discordFeed === null || discordFeed === void 0 ? void 0 : discordFeed.initTransmission());
        //loop game-state-query, draw latest image
        while (true) {
            try {
                let tempVars = yield (0, gameStateQuery_1.default)(dbFolder, sessionInfo, cnvsX, lastCleanup, cleanUpFrequency, cacheCleaned, timers, discordFeed, knownMap);
                //these vars are reused and updated on each loop
                cacheCleaned = tempVars.cacheCleaned;
                sessionInfo = tempVars.sessionInfo;
                cnvsX = tempVars.cnvsX;
                lastCleanup = tempVars.lastCleanup;
                timers = tempVars.timers;
                //livefeed needs to be rebuilt in order to clear old data.
                if (tempVars.newGameStarted) {
                    discordFeed = yield (discordFeed === null || discordFeed === void 0 ? void 0 : discordFeed.newGame());
                }
            }
            catch (error) {
                if (error.code == 'EBUSY') {
                    console.log("Cannot read snapshot-files, pausing 10ms and retrying.");
                }
                else {
                    console.log(error);
                }
                ;
            }
        }
    });
}
exports.default = trackGame;
