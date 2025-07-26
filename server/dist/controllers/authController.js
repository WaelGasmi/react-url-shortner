"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = exports.logout = exports.signup = exports.login = void 0;
const User_1 = __importDefault(require("../models/User"));
const jwt_1 = require("../utils/jwt");
const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(404).json({ message: "All fieldss are required" });
    try {
        const user = await User_1.default.findOne({ email });
        if (!user)
            return res.status(404).json({ message: "user not found" });
        const isMatch = await user.comparePassword(password);
        if (!isMatch)
            return res.status(404).json({ message: "Password wrong" });
        if (user._id)
            (0, jwt_1.generateTokenAndSetCookie)(res, user._id.toString());
        return res.status(200).json({
            message: "success",
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
        });
    }
    catch (error) {
        return res.status(500).json({ message: "Login Failed" });
    }
};
exports.login = login;
const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password)
        return res.status(404).json({ message: "All fieldss are required" });
    try {
        const ExistUser = await User_1.default.findOne({ email });
        console.log(ExistUser);
        if (ExistUser)
            return res.status(404).json({ message: "Email already used" });
        const newUser = new User_1.default({
            firstName,
            lastName,
            email,
            password,
        });
        await newUser.save();
        (0, jwt_1.generateTokenAndSetCookie)(res, newUser._id.toString());
        return res.status(200).json({
            message: "Signing up success",
            user: { firstName, lastName, email },
        });
    }
    catch (error) {
        return res.status(500).json({ message: "success" });
    }
};
exports.signup = signup;
const logout = async (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({ message: "success" });
};
exports.logout = logout;
const isAuthenticated = async (req, res) => {
    if (!req.user)
        return res.status(404).json({ message: "user not authenticated token" });
    return res.status(200).json({ user: req.user });
};
exports.isAuthenticated = isAuthenticated;
