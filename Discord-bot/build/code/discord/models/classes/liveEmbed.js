"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const capOne_1 = __importDefault(require("../../../api/util/capOne"));
const actionText_1 = __importDefault(require("../methods/liveEmbed/actionText"));
const emptyField_1 = __importDefault(require("../methods/liveEmbed/emptyField"));
const liveFeedCombatStats_1 = __importDefault(require("../methods/liveEmbed/liveFeedCombatStats"));
const liveFeedUnitsDuration_1 = __importDefault(require("../methods/liveEmbed/liveFeedUnitsDuration"));
const liveFeedUnitsSide_1 = __importDefault(require("../methods/liveEmbed/liveFeedUnitsSide"));
class LiveEmbed extends discord_js_1.EmbedBuilder {
    constructor(feed) {
        super();
        this.emptyField = emptyField_1.default;
        this.liveFeedUnitsDuration = liveFeedUnitsDuration_1.default;
        this.liveFeedUnitsSide = liveFeedUnitsSide_1.default;
        this.actionText = actionText_1.default;
        this.liveFeedCombatStats = liveFeedCombatStats_1.default;
        const serverName = feed.sessionData.serverName;
        const mission = feed.sessionData.mission;
        const map = (0, capOne_1.default)(feed.sessionData.map);
        const time = feed.snapshot.dayTime;
        const snapshot = feed.snapshot;
        //@ts-expect-error
        let iconURL = feed.bot.discordServer.iconURL();
        if (!iconURL) {
            iconURL = 'https://avatars.githubusercontent.com/u/86693523?v=4';
        }
        ;
        this.setThumbnail(iconURL);
        this.setColor(0x0099FF)
            .setTitle("**" + serverName + "**")
            .setDescription("**" + mission + "**")
            .emptyField()
            .liveFeedUnitsDuration(snapshot)
            .liveFeedUnitsSide(snapshot)
            .liveFeedCombatStats(feed)
            .actionText(feed, snapshot)
            .addFields({ name: "\n" + map, value: time })
            .setFooter({
            text: 'Built by Tally#8779',
            iconURL: 'https://avatars.githubusercontent.com/u/86693523?v=4'
        })
            .setTimestamp();
        const testImgUrl = "https://akamai.vgc.no/dredition-images/773/845/77384582/77384582-teaser-top-9bc8b06bca4758b857ad5e541c071a7e.jpg?format=auto";
        if (feed.imageUrl) {
            this.setImage(/*testImgUrl*/ feed.imageUrl);
        }
        ;
        // console.log(feed.imageUrl);
    }
}
exports.default = LiveEmbed;
//could be used for a custom-server link
// this.setURL('https://discord.js.org/')
// for publicity (fiverr?)
// this.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
