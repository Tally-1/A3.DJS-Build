"use strict";
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License
Object.defineProperty(exports, "__esModule", { value: true });
function killText(snapshot, textSize) {
    const killer = snapshot.units[this.killerId];
    const victim = snapshot.deadMen[this.victimId];
    if (killer === undefined) {
        return;
    }
    ;
    if (victim === undefined) {
        return;
    }
    ;
    const killVerbs = [
        "murdered",
        "killed",
        "offed",
        "dispatched",
        "slaughtered",
        "neutralized",
        "eliminated",
        "unalived",
        "butchered",
        "took out",
        "nullified",
        "finished off",
        "eradicated",
        "whacked",
        "obliterated",
        "mowed down",
        "slayed",
        "picked off",
        "dropped"
    ];
    const withVerbs = [
        "with a",
        "packing a",
        "shooting a",
        "firing a",
        "unloading a",
        "zapping a",
        "jerking a",
        "using a"
    ];
    const w1th = withVerbs[(Math.floor(Math.random() * withVerbs.length))];
    const killWord = killVerbs[(Math.floor(Math.random() * killVerbs.length))];
    const weaponText = `${w1th} ${this.weapon}`;
    const distanceText = `at ${Math.round(this.distance)}m`;
    const secondHalf = [weaponText, distanceText][(Math.floor(Math.random() * 2))];
    const short = `${killer.name} ${killWord} ${victim.name}`;
    const medium = `${killer.name} ${killWord} ${victim.name} ${secondHalf}`;
    const complete = `${killer.name} ${killWord} ${victim.name} ${weaponText} ${distanceText}`;
    if (!textSize) {
        return medium;
    }
    ;
    if (textSize == "short") {
        return short;
    }
    ;
    if (textSize == "medium") {
        return medium;
    }
    ;
    if (textSize == "long") {
        return complete;
    }
    ;
    return;
}
exports.default = killText;
