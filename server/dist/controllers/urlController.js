"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUrl = exports.addUrl = exports.getUrlsByUserId = void 0;
const Url_1 = __importDefault(require("../models/Url"));
const User_1 = __importDefault(require("../models/User"));
const mongoose_1 = __importDefault(require("mongoose"));
const getUrlsByUserId = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId)
            return res.status(404).json({ message: "user id is required" });
        if (!mongoose_1.default.Types.ObjectId.isValid(userId))
            return res.status(404).json({ message: "ID Format Wrong" });
        const existUser = await User_1.default.findById(userId);
        if (!existUser)
            return res.status(404).json({ message: "user id not found" });
        const urls = await Url_1.default.find({ userId });
        if (urls.length === 0)
            return res.status(404).json({ message: "no urls found" });
        return res.status(200).json({ message: "success", urls });
    }
    catch (error) {
        console.error("Error in getUrlsByUserId:", error);
        return res.status(500).json({ message: "fetching urls for user failed" });
    }
};
exports.getUrlsByUserId = getUrlsByUserId;
const addUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;
        if (!originalUrl)
            return res.status(404).json({ message: "url is required" });
        const userId = req.user?._id.toString();
        const newUrl = new Url_1.default({
            originalUrl,
            userId,
        });
        await newUrl.save();
        return res.status(200).json({ message: "sucess", url: newUrl });
    }
    catch (error) {
        console.error("Error in addUrl:", error);
        return res.status(500).json({ message: "adding url failed" });
    }
};
exports.addUrl = addUrl;
const deleteUrl = async (req, res) => {
    try {
        const urlId = req.params.id;
        const userId = req.user?._id;
        if (!urlId)
            return res.status(404).json({ message: "url required" });
        const url = await Url_1.default.findById(urlId);
        if (!url) {
            return res.status(404).json({ message: "URL not found" });
        }
        if (!userId || url.userId.toString() !== userId.toString()) {
            return res.status(401).json({ message: "url not yours" });
        }
        await Url_1.default.deleteOne({ _id: urlId });
        return res.status(200).json({ message: "sucess" });
    }
    catch (error) {
        return res.status(500).json({ message: "adding url failed" });
    }
};
exports.deleteUrl = deleteUrl;
