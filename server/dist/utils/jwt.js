"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.generateTokenAndSetCookie = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const cookieOptions = {
    httpOnly: true,
    sameSite: "strict",
    secure: config_1.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000,
};
const options = { expiresIn: "1d" };
const generateTokenAndSetCookie = (res, userId) => {
    const token = jsonwebtoken_1.default.sign({ userId }, config_1.JWT_SECRET_KEY, options);
    res.cookie("token", token, cookieOptions);
};
exports.generateTokenAndSetCookie = generateTokenAndSetCookie;
const decodeToken = (token) => {
    if (!config_1.JWT_SECRET_KEY)
        throw new Error("JWT_SECRET_KEY undefined");
    return jsonwebtoken_1.default.verify(token, config_1.JWT_SECRET_KEY);
};
exports.decodeToken = decodeToken;
