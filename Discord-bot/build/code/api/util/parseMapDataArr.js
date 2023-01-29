"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function parseMapData(map) {
    const mapsRoot = path_1.default.join(__dirname, "..", "..", "..", "..", "maps");
    const mapFolder = path_1.default.join(mapsRoot, map);
    const datarrFile = path_1.default.join(mapFolder, "mapDataArr.json");
    const dataArr = require(datarrFile);
    const [mapName, mapSize, locations, waterGrids] = dataArr;
    const mapData = {
        name: mapName,
        size: mapSize,
        locations: {},
        waterGrids: []
    };
    for (const location of locations) {
        const [name, pos, type] = location;
        const locObj = {
            pos: pos,
            type: type
        };
        mapData.locations[name] = locObj;
    }
    for (const grid of waterGrids) {
        mapData.waterGrids.push(grid.toString());
    }
    let data = JSON.stringify(mapData);
    const writePath = path_1.default.join(mapFolder, "mapData.json");
    fs_1.default.writeFileSync(writePath, data);
    console.log(data);
}
exports.default = parseMapData;
