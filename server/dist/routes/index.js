"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRoutes = void 0;
const authRoutes_1 = __importDefault(require("./authRoutes"));
const urlRoutes_1 = __importDefault(require("./urlRoutes"));
const shortUrlRoutes_1 = __importDefault(require("./shortUrlRoutes"));
const NotFounfMiddleware_1 = require("../middleware/NotFounfMiddleware");
const setupRoutes = (app) => {
    app.use("/auth", authRoutes_1.default);
    app.use("/url", urlRoutes_1.default);
    app.use("/shortUrl", shortUrlRoutes_1.default);
    app.use(NotFounfMiddleware_1.NotFoundMiddleware);
};
exports.setupRoutes = setupRoutes;
