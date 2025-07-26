"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET_KEY = exports.JWT_EXPIRES = exports.NODE_ENV = exports.MONGO_DB = exports.MONGO_URI = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.JWT_EXPIRES) {
    throw new Error("Missing JWT_EXPIRES in environment");
}
exports.PORT = process.env.PORT;
exports.MONGO_URI = process.env.MONGO_URI;
exports.MONGO_DB = process.env.MONGO_DB;
exports.NODE_ENV = process.env.NODE_ENV;
exports.JWT_EXPIRES = process.env.JWT_EXPIRES;
exports.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
