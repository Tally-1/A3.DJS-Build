"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const initApi_1 = require("./code/api/initApi");
const path_1 = __importDefault(require("path"));
const deployBot_1 = __importDefault(require("./code/discord/deployBot"));
const version = 0.13;
const A3INIfolder = path_1.default.join(__dirname, "..", "..", "@INIDBI2 - Official extension", "db");
const configFile = path_1.default.join(__dirname, "..", "..", "A3DJS_Config.json");
(0, initApi_1.initApi)(A3INIfolder);
const bot = (0, deployBot_1.default)(A3INIfolder, configFile, version);
// async function drawNow(size:number) {
//     const cvx = new CanvasX("altis");
//     while (!cvx.loaded) {
//         await setTimeout(100);
//     }
//     cvx.drawWholeMap(size);
// };
// drawNow(3000);
// import child_process from "child_process";
// process.on("exit", function () {
// require("child_process")
// .spawn( process.argv.shift(), 
//         process.argv, {
//         cwd: process.cwd(),
//         detached : true,
//         stdio: "inherit" 
//     });
// });
console.log("<----------A3DJS initialization done----------->");
