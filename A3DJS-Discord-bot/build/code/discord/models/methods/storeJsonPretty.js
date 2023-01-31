"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function storeJsonPretty(path, data) {
    if (typeof data !== "string") {
        data = JSON.stringify(data);
    }
    ;
    console.log(data);
    const holder = [];
    const segments = data.split('","');
    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        if (i !== segments.length - 1) {
            holder.push(segment + '", \n"');
        }
        else {
            holder.push(segment);
        }
        ;
    }
    ;
    const newString = holder.join("");
    console.log(newString);
    fs_1.default.writeFileSync(path, newString);
}
exports.default = storeJsonPretty;
