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
function loadGrids(Canvas, map) {
    return __awaiter(this, void 0, void 0, function* () {
        const grids = {};
        const gridImgsPath = path_1.default.join("maps", map, "grids");
        const gridImages = fs_1.default.readdirSync(gridImgsPath);
        const waterGrids = Canvas.mapData.waterGrids;
        for (const grid of gridImages) {
            const name = grid.split(".")[0];
            const waterGrid = waterGrids.includes(name);
            if (!waterGrid) {
                const imgPath = path_1.default.join(gridImgsPath, grid);
                const img = yield Canvas.loadImage(imgPath);
                grids[name] = img;
            }
            ;
        }
        ;
        Canvas.grids = grids;
        return Canvas;
    });
}
exports.default = loadGrids;
;
