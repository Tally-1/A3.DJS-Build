"use strict";
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
function loadGrids(Canvas, map) {
    return __awaiter(this, void 0, void 0, function* () {
        const grids = {};
        const gridImages = fs_1.default.readdirSync("./maps/" + map + "/grids");
        const waterGrids = Canvas.mapData.waterGrids;
        for (const grid of gridImages) {
            const name = grid.split(".")[0];
            const waterGrid = waterGrids.includes(name);
            if (!waterGrid) {
                const path = "./maps/" + map + "/grids/" + grid;
                const img = yield Canvas.loadImage(path);
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
