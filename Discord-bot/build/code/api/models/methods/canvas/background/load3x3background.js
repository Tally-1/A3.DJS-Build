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
const sleep_1 = __importDefault(require("../../../../util/sleep"));
function load3x3background(path) {
    return __awaiter(this, void 0, void 0, function* () {
        let fileExists = (fs_1.default.existsSync(path));
        if (!fileExists) {
            console.log("creating custom 3x3 grid image");
        }
        ;
        let tries = 0;
        while ((!fileExists) && (tries < 500)) {
            yield (0, sleep_1.default)(1);
            fileExists = (fs_1.default.existsSync(path));
            tries++;
        }
        ;
        const background = yield this.loadImage(path);
        return background;
    });
}
exports.default = load3x3background;
;
