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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function loadIcons(Canvas) {
    return __awaiter(this, void 0, void 0, function* () {
        const icons = {
            "CIV": {},
            "EAST": {},
            "WEST": {},
            "GUER": {},
            "OTHER": {},
        };
        for (const folder of ["CIV", "EAST", "WEST", "GUER", "OTHER"]) {
            const folderPath = path_1.default.join("icons", folder);
            const files = fs_1.default.readdirSync(folderPath);
            for (const iconPng of files) {
                const name = iconPng.split(".")[0];
                const iconPath = path_1.default.join(folderPath, iconPng);
                const img = yield Canvas.loadImage(iconPath);
                icons[folder][name] = img;
            }
        }
        Canvas.icons = icons;
        return Canvas;
    });
}
exports.default = loadIcons;
