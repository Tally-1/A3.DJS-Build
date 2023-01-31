"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseIniArrayList = exports.iniFileToObject = exports.parseUnitString = exports.parseTime = exports.parseStringArr = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function parseStringArr(string, count) {
    if (count === undefined) {
        count = 1;
    }
    ;
    const lastLetter = string.length - count;
    const newString = string.substring(count, lastLetter);
    const array = JSON.parse(newString);
    return array;
}
exports.parseStringArr = parseStringArr;
;
function parseTime(stringTime) {
    const daytime = JSON.parse(JSON.parse(stringTime));
    let hour = daytime[0];
    let minute = daytime[1];
    if (hour < 10) {
        hour = "0" + hour + '';
    }
    ;
    if (minute < 10) {
        minute = "0" + minute + '';
    }
    ;
    const time = ('' + hour + ':' + minute);
    return time;
}
exports.parseTime = parseTime;
;
function parseUnitString(string) {
    const lastLetter = string.length - 2;
    const newString = string.substring(2, lastLetter);
    const segments = newString.split(',');
    const newSegments = [];
    for (const segment of segments) {
        let newSegment = segment.replace('""', '"');
        newSegment = newSegment.replace('""""', '""');
        const canChange = newSegment !== '""';
        if (canChange && newSegment.endsWith('""')) {
            newSegment = newSegment.replace('""', '"');
        }
        ;
        newSegment = newSegment.replace('"[', '[');
        newSegment = newSegment.replace(']"', ']');
        newSegment = newSegment.replace('""]', '"]');
        newSegments.push(newSegment);
    }
    ;
    const finalString = newSegments.join(", ");
    const parsedArray = JSON.parse(finalString);
    return parsedArray;
}
exports.parseUnitString = parseUnitString;
;
function iniFileToObject(folder, fileName) {
    const file = path_1.default.join(folder, fileName + ".ini");
    const string = fs_1.default.readFileSync(file, 'utf8');
    const parsedString = parseINIString(string);
    const data = parsedString[fileName];
    return data;
}
exports.iniFileToObject = iniFileToObject;
;
function parseIniArrayList(listObject) {
    const keys = Object.keys(listObject);
    const newObject = {};
    for (const key of keys) {
        const string = listObject[key];
        let remove = 1;
        if (string.startsWith('""')) {
            remove = 2;
        }
        ;
        const value = parseStringArr(string, remove);
        newObject[key] = value;
    }
    ;
    return newObject;
}
exports.parseIniArrayList = parseIniArrayList;
;
function parseINIString(data) {
    var regex = {
        section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
        param: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/,
        comment: /^\s*;.*$/
    };
    var value = {};
    var lines = (data.split(/[\r\n]+/));
    var section = null;
    lines.forEach(function (line) {
        if (regex.comment.test(line)) {
            return;
        }
        else if (regex.param.test(line)) {
            var match = line.match(regex.param);
            if (section) {
                value[section][match[1]] = match[2];
            }
            else {
                value[match[1]] = match[2];
            }
        }
        else if (regex.section.test(line)) {
            var match = line.match(regex.section);
            value[match[1]] = {};
            section = match[1];
        }
        else if (line.length == 0 && section) {
            section = null;
        }
        ;
    });
    return value;
}
;
