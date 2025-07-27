"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDb = async () => {
    if (!process.env.MONGO_URI)
        throw new Error("Mongo uri undefined");
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI);
        mongoose_1.default.connection.on("open", () => {
            console.log("MongoDb connected");
        });
        mongoose_1.default.connection.on("reconnected", () => {
            console.log("MongoDb reconnected");
        });
        mongoose_1.default.connection.on("error", () => {
            console.log("MongoDb error");
        });
        mongoose_1.default.connection.on("disconnected", () => {
            console.log("MongoDb disconnected");
        });
    }
    catch (error) {
        console.log(`Mongodb not connecting ${error}`);
    }
};
exports.connectDb = connectDb;
