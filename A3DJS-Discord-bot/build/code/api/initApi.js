"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApi = void 0;
const gameTracker_1 = __importDefault(require("./models/classes/gameTracker"));
function initApi(folder) {
    gameTracker_1.default.trackGame(folder);
    return;
}
exports.initApi = initApi;
;
