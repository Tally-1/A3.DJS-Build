"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function clearIniFile(folder, fileName) {
    const header = "[" + fileName + "]";
    const completeFileName = fileName + ".ini";
    const filePath = path_1.default.join(folder, completeFileName);
    fs_1.default.writeFileSync(filePath, header);
}
exports.default = clearIniFile;
