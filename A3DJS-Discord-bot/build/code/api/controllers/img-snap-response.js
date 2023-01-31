"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentSnapImg = exports.currentSnapData = void 0;
const path_1 = __importDefault(require("path"));
const folder = path_1.default.join("..", "@iniDB2", "db");
const image = path_1.default.join(__dirname, "..", "..", "..", "..", "gameImages", "snapShot.jpg");
const currentSnapData = (req, res, next) => {
    res.json(res.locals.snapShot);
};
exports.currentSnapData = currentSnapData;
const currentSnapImg = (req, res, next) => {
    res.sendFile(image);
};
exports.currentSnapImg = currentSnapImg;
