"use strict";
//This solution was retrieved at stack-overflow and modified to fit Typescript.
//source:
//https://stackoverflow.com/questions/3870019/javascript-parser-for-a-string-which-contains-ini-data
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = parseINIString;
;
