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
function getResponse(requestId, time) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionData = this.sessionData;
        let response = sessionData === null || sessionData === void 0 ? void 0 : sessionData.responses[requestId];
        let responseFound = false;
        let timedOut = false;
        while (responseFound === false && timedOut === false) {
            const sessionData = this.sessionData;
            const curTime = new Date().getTime();
            response = sessionData === null || sessionData === void 0 ? void 0 : sessionData.responses[requestId];
            responseFound = response !== undefined;
            timedOut = curTime > (time + 10000);
            yield (0, promises_1.setTimeout)(100);
        }
        ;
        return response;
    });
}
exports.default = getResponse;
;
