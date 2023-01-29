"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assignSnapshot(_req, res, next) {
    //@ts-expect-error
    res.locals.snapShot = process.currentSnap;
    next();
}
exports.default = assignSnapshot;
