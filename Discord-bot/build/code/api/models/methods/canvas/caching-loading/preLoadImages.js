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
const loadGrids_1 = __importDefault(require("./loadGrids"));
const loadIcons_1 = __importDefault(require("./loadIcons"));
function preLoadImages(Canvs, map) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, loadIcons_1.default)(Canvs);
        yield (0, loadGrids_1.default)(Canvs, map);
        Canvs.loaded = true;
    });
}
exports.default = preLoadImages;
