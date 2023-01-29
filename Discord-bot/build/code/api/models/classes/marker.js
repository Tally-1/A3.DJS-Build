"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getMarkers_1 = __importDefault(require("../methods/marker/getMarkers"));
;
class Marker {
    constructor(name, type, brush, shape, color, alpha, text, size, dir, pos, line) {
        this.name = name;
        this.type = type;
        this.brush = brush;
        this.shape = shape;
        this.color = color;
        this.alpha = alpha;
        this.text = text;
        this.size = size;
        this.dir = dir;
        this.pos = pos;
        this.line = line;
    }
    ;
}
exports.default = Marker;
Marker.getMarkers = getMarkers_1.default;
