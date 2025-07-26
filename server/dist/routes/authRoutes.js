"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.post("/login", authController_1.login);
router.post("/signup", authController_1.signup);
router.use(authMiddleware_1.verifyToken);
router.post("/logout", authController_1.logout);
router.get("/isAuthenticated", authController_1.isAuthenticated);
exports.default = router;
