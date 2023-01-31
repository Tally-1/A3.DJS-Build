"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const assignSnapshot_1 = __importDefault(require("./controllers/assignSnapshot"));
const routes_1 = __importDefault(require("./routes/routes"));
function setupExpress() {
    const app = (0, express_1.default)();
    app.use(assignSnapshot_1.default);
    app.use(routes_1.default);
    return app;
}
exports.default = setupExpress;
