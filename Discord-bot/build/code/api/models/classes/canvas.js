"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const preLoadImages_1 = __importDefault(require("../methods/canvas/caching-loading/preLoadImages"));
const Cnvs = __importStar(require("@napi-rs/canvas"));
const setBackgroundSync_1 = __importDefault(require("../methods/canvas/background/setBackgroundSync"));
const setBackground_1 = __importDefault(require("../methods/canvas/background/setBackground"));
const customGridImage_1 = __importDefault(require("../methods/canvas/background/customGridImage"));
const cacheTempImg_1 = __importDefault(require("../methods/canvas/caching-loading/cacheTempImg"));
const storeFrame_1 = __importDefault(require("../methods/canvas/caching-loading/storeFrame"));
const x3gridImage_1 = __importDefault(require("../methods/canvas/background/x3gridImage"));
const load3x3background_1 = __importDefault(require("../methods/canvas/background/load3x3background"));
const drawSnapshot_1 = __importDefault(require("../methods/canvas/drawSnapshot"));
const backGroundCached_1 = __importDefault(require("../methods/canvas/background/backGroundCached"));
const writeGameInfo_1 = __importDefault(require("../methods/canvas/drawing-writing/writeGameInfo"));
const drawKills_1 = __importDefault(require("../methods/canvas/drawing-writing/drawKills"));
const drawLocations_1 = __importDefault(require("../methods/canvas/drawing-writing/drawLocations"));
const drawObjectMarker_1 = __importDefault(require("../methods/canvas/drawing-writing/drawObjectMarker"));
const getVehicleIcon_1 = __importDefault(require("../methods/canvas/caching-loading/getVehicleIcon"));
const drawDeadMen_1 = __importDefault(require("../methods/canvas/drawing-writing/drawDeadMen"));
const drawMen_1 = __importDefault(require("../methods/canvas/drawing-writing/drawMen"));
const drawVehicles_1 = __importDefault(require("../methods/canvas/drawing-writing/drawVehicles"));
const drawExplosions_1 = __importDefault(require("../methods/canvas/drawing-writing/drawExplosions"));
const drawGameData_1 = __importDefault(require("../methods/canvas/drawing-writing/drawGameData"));
const drawMultiGrid_1 = __importDefault(require("../methods/canvas/drawing-writing/drawMultiGrid"));
const removeCachedFiles_1 = __importDefault(require("../methods/canvas/removeCachedFiles"));
const logAndCacheManager_1 = __importDefault(require("../methods/canvas/caching-loading/logAndCacheManager"));
const cleanCache_1 = __importDefault(require("../methods/canvas/caching-loading/cleanCache"));
const getGridImages_1 = __importDefault(require("../methods/canvas/caching-loading/getGridImages"));
;
class CanvasX {
    constructor(map) {
        this.drawSnapShot = drawSnapshot_1.default;
        this.backGroundCached = backGroundCached_1.default;
        this.setBackgroundSync = setBackgroundSync_1.default;
        this.setBackground = setBackground_1.default;
        this.load3x3background = load3x3background_1.default;
        this.drawMultiGrid = drawMultiGrid_1.default;
        this.x3gridImage = x3gridImage_1.default;
        this.cacheTempImg = cacheTempImg_1.default;
        this.logAndCacheManager = logAndCacheManager_1.default;
        this.cleanCache = cleanCache_1.default;
        this.customGridImage = customGridImage_1.default;
        this.writeGameInfo = writeGameInfo_1.default;
        this.drawGameData = drawGameData_1.default;
        this.drawLocations = drawLocations_1.default;
        this.drawKills = drawKills_1.default;
        this.drawDeadMen = drawDeadMen_1.default;
        this.drawMen = drawMen_1.default;
        this.drawVehicles = drawVehicles_1.default;
        this.drawExplosions = drawExplosions_1.default;
        this.drawObjectMarker = drawObjectMarker_1.default;
        this.getVehicleIcon = getVehicleIcon_1.default;
        this.getGridImages = getGridImages_1.default;
        //|properties retrieved from the canvasJs package\\
        this.clearAllCache = Cnvs.clearAllCache;
        this.Canvas = Cnvs.Canvas;
        this.createCanvas = Cnvs.createCanvas;
        this.Path2D = Cnvs.Path2D;
        this.ImageData = Cnvs.ImageData;
        this.Image = Cnvs.Image;
        this.PathOp = Cnvs.PathOp;
        this.FillType = Cnvs.FillType;
        this.StrokeCap = Cnvs.StrokeCap;
        this.StrokeJoin = Cnvs.StrokeJoin;
        this.SvgExportFlag = Cnvs.SvgExportFlag;
        this.GlobalFonts = Cnvs.GlobalFonts;
        this.convertSVGTextToPath = Cnvs.convertSVGTextToPath;
        this.DOMPoint = Cnvs.DOMPoint;
        this.DOMMatrix = Cnvs.DOMMatrix;
        this.DOMRect = Cnvs.DOMRect;
        this.loadImage = Cnvs.loadImage;
        //|------------------------------------------------------------\\
        const dataPath = path_1.default.join(".", "maps", map, "mapData.json");
        const data = fs_1.default.readFileSync(dataPath);
        const mapData = JSON.parse(data);
        this.mapData = mapData;
        this.customGrids = {};
        this.x3Grids = {};
        this.multiGrids = {};
        this.icons = {};
        this.grids = {};
        this.loaded = false;
        (0, preLoadImages_1.default)(this, map); //this preLoad may take a couple of seconds
    }
}
exports.default = CanvasX;
CanvasX.removeCachedFiles = removeCachedFiles_1.default;
CanvasX.storeFrame = storeFrame_1.default;
;
