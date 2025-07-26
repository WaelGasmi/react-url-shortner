"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
const connectDb_1 = require("./db/connectDb");
const startServer = async () => {
    console.clear();
    await (0, connectDb_1.connectDb)();
    app_1.default
        .listen(config_1.PORT, () => {
        console.log(`Server is running at ${config_1.PORT}`);
    })
        .on("error", (err) => {
        console.log(`Server failed ${err}`);
    });
};
startServer();
