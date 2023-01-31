"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function getObjectTypes(object, log) {
    const keys = Object.keys(object);
    const keysWithValueTypes = {};
    for (const key of keys) {
        keysWithValueTypes[key] = (typeof object[key]);
    }
    if (log) {
        console.log(keysWithValueTypes);
    }
    ;
    return keysWithValueTypes;
}
exports.default = getObjectTypes;
