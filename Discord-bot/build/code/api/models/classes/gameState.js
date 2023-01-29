"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const A3Session_1 = __importDefault(require("./A3Session"));
const snapshot_1 = __importDefault(require("./snapshot"));
class GameState {
    constructor(folder) {
        this.sessionData = new A3Session_1.default(folder);
        this.snapshot = snapshot_1.default.getCurrent(folder);
        this.lastUpdate = new Date().getTime();
        this.stateToProccess(this.sessionData, this.snapshot);
    }
    ;
    update(sessionData, snapshot) {
    }
    ;
    stateToProccess(session, snapshot) {
        //@ts-expect-error 
        process.state =
            {
                session: session,
                currentSnap: snapshot,
                lastUpdate: new Date().getTime()
            };
    }
}
exports.default = GameState;
