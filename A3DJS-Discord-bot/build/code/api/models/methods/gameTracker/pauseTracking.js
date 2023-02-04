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
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("node:timers/promises");
function pauseTracking(sessionInfo, timeSpent, dataFound) {
    return __awaiter(this, void 0, void 0, function* () {
        let pause = sessionInfo.updateFrequency * 1000 - timeSpent;
        if (timeSpent < 10 || !dataFound) {
            pause = 10;
        }
        if (pause > 0) {
            yield (0, promises_1.setTimeout)(pause);
        }
        ;
    });
}
exports.default = pauseTracking;
;
