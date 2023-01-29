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
const positionData_1 = __importDefault(require("../../../util/positionData"));
function setBackground(pencil, map, backGroundData) {
    return __awaiter(this, void 0, void 0, function* () {
        let background = undefined;
        const { bottomLeft, imgCacheName, size } = backGroundData;
        const useMultiGrid = (size > 2000);
        if (useMultiGrid) {
            const grid = (0, positionData_1.default)(bottomLeft).grid;
            const gridCount = size / 1000;
            background = this.drawMultiGrid(grid, gridCount, size, map, null, true);
        }
        else {
            const imgPath = yield this.customGridImage(backGroundData, map);
            background = yield this.loadImage(imgPath);
        }
        if (typeof background !== "string") {
            pencil.drawImage(background, 0, 0, 1000, 1000);
            // cache img for future use 
            if (useMultiGrid) {
                this.cacheTempImg("multiGrids", (imgCacheName), background);
            }
            else {
                this.cacheTempImg("customGrids", (imgCacheName), background);
            }
            ;
        }
        return bottomLeft;
    });
}
exports.default = setBackground;
;
