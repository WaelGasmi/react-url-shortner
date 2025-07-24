import express from "express";
import {
  isAuthenticated,
  login,
  logout,
  signup,
} from "../controllers/authController";
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

router.use(verifyToken);

router.post("/logout", logout);
router.get("/isAuthenticated", isAuthenticated);

export default router;
