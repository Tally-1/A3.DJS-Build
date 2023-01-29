"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function cleanCache(key, limit) {
    //declare a new object copying CanvasX[key]
    const obj = this[key];
    const keys = Object.keys(obj);
    const count = keys.length;
    const diff = count - limit;
    //exit if the amount of cached images does not exceed the limit
    if (diff <= 0) {
        return;
    }
    //delete the oldest images first until limit has been reached.
    let i = 0;
    for (const k of keys) {
        if (i <= diff) {
            delete obj[k];
        }
        i++;
    }
    console.log("removed " + diff + " images from " + key + " cache");
    //update the CanvasX object.
    this[key] = obj;
}
exports.default = cleanCache;
