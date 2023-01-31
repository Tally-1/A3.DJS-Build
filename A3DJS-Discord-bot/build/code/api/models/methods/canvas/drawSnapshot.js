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
const path_1 = __importDefault(require("path"));
const sleep_1 = __importDefault(require("../../../util/sleep"));
const canvas_1 = __importDefault(require("../../classes/canvas"));
const focusArea_1 = __importDefault(require("../../classes/focusArea"));
// Be aware there will be weird stuff when drawing the snapshot.
// Main reason is that I built the drawSnapshot function in JS
// in a "scripting-style" of programming, so when I am now switching 
// to TS the refactoring of this particular method becomes weird.
// if there is enough interest (and funding) in this project I'll
// go back and rewrite it from scratch OOP style.
function drawSnapShot(snapshot, sessionInfo, knownMap) {
    return __awaiter(this, void 0, void 0, function* () {
        while (this.loaded === false) {
            yield (0, sleep_1.default)(10);
        }
        ;
        let map = sessionInfo.map;
        const frame = this.createCanvas(1000, 1000);
        const pencil = frame.getContext("2d");
        const focusArea = new focusArea_1.default(snapshot, sessionInfo);
        const backGroundData = focusArea.defineBackGround();
        const { imgCacheName } = backGroundData;
        const backgroundCached = this.backGroundCached(imgCacheName);
        if (!knownMap) {
            map = "VR";
        }
        ;
        if (backgroundCached) {
            this.setBackgroundSync(pencil, backGroundData);
        }
        else {
            yield this.setBackground(pencil, map, backGroundData);
        }
        this.writeGameInfo(pencil, snapshot, sessionInfo, backGroundData, knownMap);
        this.drawGameData(pencil, snapshot, backGroundData, sessionInfo.gameTime);
        const snapshotPath = path_1.default.join("gameImages", "snapShot.jpg");
        canvas_1.default.storeFrame(frame, snapshotPath);
    });
}
exports.default = drawSnapShot;
