"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const User_1 = __importDefault(require("../models/User"));
const jwt_1 = require("../utils/jwt");
const verifyToken = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token)
        return res.status(404).json({ message: "not token provided" });
    try {
        const decoded = (0, jwt_1.decodeToken)(token);
        if (!decoded?.userId)
            return res.status(404).json({ message: "unauthorized" });
        const user = await User_1.default.findById(decoded?.userId).select("-password");
        if (!user)
            return res.status(404).json({ message: "user not found" });
        req.user = user;
        next();
    }
    catch (error) {
        res.status(404).json({ message: "Authentication Failed" });
    }
};
exports.verifyToken = verifyToken;
