"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const connectDb_1 = require("./db/connectDb");
const startServer = async () => {
    console.clear();
    await (0, connectDb_1.connectDb)();
    app_1.default
        .listen(process.env.PORT, () => {
        console.log(`Server is running at ${process.env.PORT}`);
    })
        .on("error", (err) => {
        console.log(`Server failed ${err}`);
    });
};
startServer();
