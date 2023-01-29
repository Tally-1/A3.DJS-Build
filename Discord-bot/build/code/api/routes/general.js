"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const general_1 = require("../controllers/general");
const router = (0, express_1.Router)();
router.get("/", general_1.currentSnapData);
exports.default = router;
