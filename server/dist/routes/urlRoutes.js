"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const urlController_1 = require("../controllers/urlController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.use(authMiddleware_1.verifyToken);
router.get("/:id", urlController_1.getUrlsByUserId);
router.post("/", urlController_1.addUrl);
router.delete("/:id", urlController_1.deleteUrl);
exports.default = router;
