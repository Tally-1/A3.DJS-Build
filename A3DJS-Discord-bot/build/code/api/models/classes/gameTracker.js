"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const newGame_1 = __importDefault(require("../methods/gameTracker/newGame"));
const stateToProccess_1 = __importDefault(require("../methods/gameTracker/stateToProccess"));
const trackGame_1 = __importDefault(require("../methods/gameTracker/trackGame"));
class GameTracker {
    constructor() { }
}
exports.default = GameTracker;
GameTracker.trackGame = trackGame_1.default;
GameTracker.newGame = newGame_1.default;
GameTracker.stateToProccess = stateToProccess_1.default;
;
