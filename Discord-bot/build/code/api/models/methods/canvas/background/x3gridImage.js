"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
function x3gridImage(bottomLeftGrid, map) {
    const filePath = path_1.default.join("maps", map, "cache", "3x3", "[" + bottomLeftGrid + "].jpg");
    this.drawMultiGrid(bottomLeftGrid, 3, 3000, map, filePath, false);
    return filePath;
}
exports.default = x3gridImage;
