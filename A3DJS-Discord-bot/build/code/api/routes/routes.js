"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const img_snap_response_1 = require("../controllers/img-snap-response");
const router = (0, express_1.Router)();
router.get("/", (req, res) => { res.send('<h1>Welcome!</h1> <p>See "/data" for the json-snap, and "/image" for the jpg-snap</p>'); });
router.get("/data", img_snap_response_1.currentSnapData);
router.get("/img", img_snap_response_1.currentSnapImg);
exports.default = router;
