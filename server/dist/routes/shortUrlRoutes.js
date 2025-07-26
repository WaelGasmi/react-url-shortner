"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shortUrlController_1 = require("../controllers/shortUrlController");
const router = express_1.default.Router();
router.get("/:id", shortUrlController_1.getShortUrl);
exports.default = router;
