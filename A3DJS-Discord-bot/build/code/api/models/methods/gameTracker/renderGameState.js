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
const snapshot_1 = __importDefault(require("../../classes/snapshot"));
function renderGameState(dbFolder, sessionInfo, cnvsX, discordFeed, knownMap) {
    return __awaiter(this, void 0, void 0, function* () {
        let dataFound = false;
        const newGameStarted = sessionInfo.newSessionStarted();
        const updateAvailable = sessionInfo.hasUpdated();
        if (updateAvailable && (!newGameStarted)) {
            const snapshot = snapshot_1.default.getCurrent(dbFolder);
            sessionInfo.addStats(snapshot);
            yield cnvsX.drawSnapShot(snapshot, sessionInfo, knownMap);
            dataFound = true;
            gameTracker_1.default.stateToProccess(sessionInfo, snapshot);
            const updateStatus = yield (discordFeed === null || discordFeed === void 0 ? void 0 : discordFeed.updateTransmission(snapshot));
            if (discordFeed && updateStatus) {
                discordFeed.updateStatus = updateStatus;
            }
        }
        return {
            dataFound: dataFound,
            newGameStarted: newGameStarted
        };
    });
}
exports.default = renderGameState;
