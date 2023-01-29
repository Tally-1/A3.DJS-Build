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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
function sendSnapImg(deletePrevious) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (this.sendingImage) {
            return;
        }
        ;
        const timeSinceLast = (new Date().getTime()) - this.lastImgOutTime;
        if (timeSinceLast < this.updateFrequency) {
            return;
        }
        ;
        this.sendingImage = true;
        if (deletePrevious === undefined) {
            deletePrevious = true;
        }
        ;
        try {
            const snapshotPath = path_1.default.join("gameImages", "snapShot.jpg");
            const newMessage = yield this.imageChannel.send({ files: [snapshotPath] });
            if (!newMessage) {
                return;
            }
            ;
            if (deletePrevious && this.previousImageMsg) {
                yield this.deletePreviousImg();
            }
            ;
            this.previousImageMsg = newMessage;
            const imageUrl = (_a = newMessage.attachments.at(0)) === null || _a === void 0 ? void 0 : _a.url;
            this.lastImgOutTime = new Date().getTime();
            this.sendingImage = false;
            return imageUrl;
        }
        catch (error) {
            this.sendingImage = false;
            return;
        }
        ;
    });
}
exports.default = sendSnapImg;
;
