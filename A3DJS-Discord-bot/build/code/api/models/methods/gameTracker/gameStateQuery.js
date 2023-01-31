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
const gameTracker_1 = __importDefault(require("../../classes/gameTracker"));
const renderGameState_1 = __importDefault(require("./renderGameState"));
const pauseTracking_1 = __importDefault(require("./pauseTracking"));
const sleep_1 = __importDefault(require("../../../util/sleep"));
function gameStateQuery(dbFolder, sessionInfo, cnvsX, lastCleanup, cleanUpFrequency, cacheCleaned, timers, discordFeed, knownMap) {
    return __awaiter(this, void 0, void 0, function* () {
        const time = new Date().getTime();
        const { newGameStarted, dataFound } = yield (0, renderGameState_1.default)(dbFolder, sessionInfo, cnvsX, discordFeed, knownMap);
        // Update session-data, re-init Canvas, and clean up bot-channels 
        // if a new-session was started.
        if (newGameStarted) {
            yield (0, sleep_1.default)(3000);
            const newGame = gameTracker_1.default.newGame(dbFolder);
            sessionInfo = newGame.sessionInfo;
            cnvsX = newGame.cnvsX;
            yield cnvsX.drawSnapShot(newGame.snapshot, sessionInfo, knownMap);
            console.log("------New Game Sarted------");
        }
        //check time used on drawing image, and update pause-time
        const currentTime = new Date().getTime();
        const timeSpent = currentTime - time;
        //timed log and cache-cleanup
        const collectGarbage = currentTime - lastCleanup > cleanUpFrequency;
        if (collectGarbage) {
            cacheCleaned = cnvsX.logAndCacheManager(timers, cacheCleaned);
            lastCleanup = new Date().getTime();
        }
        //pause tracking for the time set in Arma 3.
        yield (0, pauseTracking_1.default)(sessionInfo, timeSpent, dataFound);
        //sometimes the data is not updated, only push the time when info is gathered.
        if (timeSpent > 1) {
            timers.push(timeSpent);
        }
        //the timeSpent is used in the debuggging text for canvas.
        sessionInfo.lastTime = timeSpent;
        if (dataFound) {
            //process.lastGameStateQuery will be called as a condition to update
            //the discord-ingame-screenshot.
            // //@ts-expect-error
            // process.lastGameStateQuery = new Date().getTime();
        }
        return {
            cacheCleaned: cacheCleaned,
            timers: timers,
            lastCleanup: lastCleanup,
            sessionInfo: sessionInfo,
            cnvsX: cnvsX,
            newGameStarted: newGameStarted
        };
    });
}
exports.default = gameStateQuery;
