"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const average_1 = __importDefault(require("../../../../util/average"));
function logAndCacheManager(timers, cacheCleaned) {
    const deleteAll = (cacheCleaned >= 10);
    console.log("--------Caching and update status:--------");
    //log cache status and refresh-rate
    logMonitorState(this, timers);
    console.log(``);
    if (!deleteAll) {
        //delete cached images surpassing the limit set here (maybe add a config later)
        this.cleanCache("customGrids", 15);
        this.cleanCache("x3Grids", 5);
        this.cleanCache("multiGrids", 1);
        console.log(``);
        cacheCleaned++;
    }
    else {
        //every 20 minutes a full cleanup is done (lazy way of getting rid of unused images taking up memory)
        console.log("Cleaning all cached images");
        this.cleanCache("customGrids", 0);
        this.cleanCache("x3Grids", 0);
        this.cleanCache("multiGrids", 0);
        cacheCleaned = 0;
    }
    ;
    return cacheCleaned;
}
exports.default = logAndCacheManager;
;
function logMonitorState(cnvx, timers) {
    const x3Preloaded = Object.keys(cnvx.x3Grids).length;
    const cstmGrdloaded = Object.keys(cnvx.customGrids).length;
    const multiGrids = Object.keys(cnvx.multiGrids).length;
    console.log("Average update-time: " + ((0, average_1.default)(timers)) + "ms");
    console.log(``);
    console.log(cstmGrdloaded + "  customGrids cached");
    console.log(x3Preloaded + "  3x3 grids cached");
    console.log(multiGrids + "  multiGrids cached");
    timers = [];
}
;
