"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
const urlSchema = new mongoose_1.default.Schema({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, default: "", unique: true },
    visited: { type: Number, default: 0 },
    userId: { type: mongoose_1.default.Schema.ObjectId, ref: "User", required: true },
}, { timestamps: true });
urlSchema.pre("save", async function (next) {
    try {
        this.shortUrl = (0, nanoid_1.nanoid)(6);
        next();
    }
    catch (error) {
        if (error instanceof Error)
            next(error);
        else
            console.log("short url hashing failed");
    }
});
const Url = mongoose_1.default.model("Url", urlSchema);
exports.default = Url;
