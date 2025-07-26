"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShortUrl = void 0;
const Url_1 = __importDefault(require("../models/Url"));
const getShortUrl = async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ error: "Missing URL ID parameter" });
    }
    try {
        const url = await Url_1.default.findOne({ shortUrl: id });
        if (!url) {
            return res.status(404).json({ error: "Short URL not found" });
        }
        url.visited += 1;
        await url.save();
        return res.redirect(url.originalUrl);
    }
    catch (error) {
        console.error("Error in getShortUrl:", error.message || error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
exports.getShortUrl = getShortUrl;
