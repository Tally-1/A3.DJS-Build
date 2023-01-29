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
const A3ToCanvasGridPos_1 = __importDefault(require("../../../../util/A3ToCanvasGridPos"));
const positionData_1 = __importDefault(require("../../../../util/positionData"));
const canvas_1 = __importDefault(require("../../../classes/canvas"));
const path_1 = __importDefault(require("path"));
function customGridImage(backGroundData) {
    return __awaiter(this, void 0, void 0, function* () {
        const map = this.mapData.name;
        const { bottomLeft, size } = backGroundData;
        const pth = path_1.default.join(".", "maps", map, "cache", "custom", "custom.jpg");
        const frame = this.createCanvas(size, size);
        const pencil = frame.getContext("2d");
        // get the bottom-left corner
        const bottomLeftGrid = (0, positionData_1.default)(bottomLeft).grid;
        //convert sqf position to Javascript position.
        const [x, y] = (0, A3ToCanvasGridPos_1.default)(bottomLeft, size);
        // use cahced image if available
        const cached = this.x3Grids[("[" + bottomLeftGrid + "]")];
        if (cached !== undefined) {
            pencil.drawImage(cached, x, y, 3000, 3000);
            canvas_1.default.storeFrame(frame, pth);
            return pth;
        }
        ;
        //load background
        const backgroundpth = this.x3gridImage(bottomLeftGrid, map);
        const background = yield this.load3x3background(backgroundpth);
        pencil.drawImage(background, x, y, 3000, 3000);
        // drawFocusOn3x3(Canvas, background, backGroundData);
        canvas_1.default.storeFrame(frame, pth);
        // cache img for future use
        this.cacheTempImg("x3Grids", ("[" + bottomLeftGrid + "]"), background);
        return pth;
    });
}
exports.default = customGridImage;
;
