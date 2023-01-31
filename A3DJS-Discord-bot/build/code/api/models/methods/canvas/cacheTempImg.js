"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cacheTempImg(key, imgName, image) {
    //non-existent keys will cause an error, hence it is necesary to create a new object
    //then edit that one and fiunally update the Canvas object.
    const obj = this[key];
    obj[imgName] = image;
    this[key] = obj;
}
exports.default = cacheTempImg;
;
