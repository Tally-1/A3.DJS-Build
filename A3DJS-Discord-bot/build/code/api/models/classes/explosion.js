"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getExplosions_1 = __importDefault(require("../methods/explosion/getExplosions"));
;
class Explosion {
    constructor(pos, dir, size, time) {
        this.pos = pos;
        this.dir = dir;
        this.size = size;
        this.time = time;
    }
    ;
}
exports.default = Explosion;
Explosion.getExplosions = getExplosions_1.default;
