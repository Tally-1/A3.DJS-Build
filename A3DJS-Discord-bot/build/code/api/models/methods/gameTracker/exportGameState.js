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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameTracker_1 = __importDefault(require("../../classes/gameTracker"));
const INIparser_1 = __importDefault(require("../../classes/INIparser"));
const snapshot_1 = __importDefault(require("../../classes/snapshot"));
function exportGameState(dbFolder, sessionInfo, cnvsX) {
    return __awaiter(this, void 0, void 0, function* () {
        let dataFound = false;
        const newGameStarted = sessionInfo.newSessionStarted();
        const updateAvailable = sessionInfo.hasNewData();
        if (updateAvailable && (!newGameStarted)) {
            const snapshot = snapshot_1.default.getCurrent(dbFolder);
            const commands = INIparser_1.default.readCommands(dbFolder);
            // console.log(commands)
            yield cnvsX.drawSnapShot(snapshot, sessionInfo);
            dataFound = true;
            gameTracker_1.default.stateToProccess(sessionInfo, snapshot);
        }
        return { dataFound: dataFound, newGameStarted: newGameStarted };
    });
}
exports.default = exportGameState;
