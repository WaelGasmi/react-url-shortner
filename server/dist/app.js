"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./routes/index");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)(process.env.NODE_ENV === "development" ? "dev" : "combined"));
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://react-url-shortner-two.vercel.app",
    ],
    credentials: true,
}));
app.use((0, helmet_1.default)());
(0, index_1.setupRoutes)(app);
exports.default = app;
