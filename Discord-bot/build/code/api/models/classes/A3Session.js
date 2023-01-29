"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const parseSessionFile_1 = __importDefault(require("../methods/A3Session/parseSessionFile"));
const update_1 = __importDefault(require("../methods/A3Session/update"));
const hasChanged_1 = __importDefault(require("../methods/A3Session/hasChanged"));
const hasUpdated_1 = __importDefault(require("../methods/A3Session/hasUpdated"));
const latestUpdateTime_1 = __importDefault(require("../methods/A3Session/latestUpdateTime"));
const focusTypeText_1 = __importDefault(require("../methods/A3Session/focusTypeText"));
const addStats_1 = __importDefault(require("../methods/A3Session/addStats"));
const resetStats_1 = __importDefault(require("../methods/A3Session/resetStats"));
const getLatestKillText_1 = __importDefault(require("../methods/A3Session/getLatestKillText"));
const getLatestKill_1 = __importDefault(require("../methods/A3Session/getLatestKill"));
class A3session {
    constructor(folder) {
        this.parseSessionFile = parseSessionFile_1.default;
        this.update = update_1.default;
        this.newSessionStarted = hasChanged_1.default;
        this.latestUpdateTime = latestUpdateTime_1.default;
        this.hasUpdated = hasUpdated_1.default;
        this.focusTypeText = focusTypeText_1.default;
        this.addStats = addStats_1.default;
        this.resetStats = resetStats_1.default;
        this.getLatestKillText = getLatestKillText_1.default;
        this.getLatestKill = getLatestKill_1.default;
        this.sessionFile = path_1.default.join(folder, "A3ToDJS_sessionInfo.ini");
        this.timeFile = path_1.default.join(folder, "A3ToDJS_timeStamp.ini");
        const sessionData = this.parseSessionFile();
        this.updateFrequency = sessionData.updateFrequency;
        this.sessionName = sessionData.sessionName;
        this.version = sessionData.version;
        this.map = sessionData.map;
        this.mapData = sessionData.mapData;
        this.focusType = sessionData.focusType;
        this.focusEnemy = sessionData.focusEnemy;
        this.serverName = sessionData.serverName;
        this.mission = sessionData.mission;
        this.gameTime = this.latestUpdateTime(); // refers to the ingame time
        this.lastGameUpdate = this.latestUpdateTime();
        this.stats = {
            kills: {},
            explosions: {},
            shotsFired: 0
        };
        this.responses = {};
    }
}
exports.default = A3session;
var FocusType;
(function (FocusType) {
    FocusType[FocusType["wholeMap"] = 0] = "wholeMap";
    FocusType[FocusType["all_players"] = 1] = "all_players";
    FocusType[FocusType["blufor_only"] = 2] = "blufor_only";
    FocusType[FocusType["opfor_only"] = 3] = "opfor_only";
    FocusType[FocusType["independent_only"] = 4] = "independent_only";
    FocusType[FocusType["civilian_only"] = 5] = "civilian_only";
    FocusType[FocusType["blufor_and_opfor"] = 6] = "blufor_and_opfor";
    FocusType[FocusType["blufor_independent"] = 7] = "blufor_independent";
    FocusType[FocusType["opfor_independent"] = 8] = "opfor_independent";
    FocusType[FocusType["All_units"] = 9] = "All_units";
})(FocusType || (FocusType = {}));
