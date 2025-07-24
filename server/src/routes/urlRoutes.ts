import express from "express";
import {
  addUrl,
  deleteUrl,
  getUrlsByUserId,
} from "../controllers/urlController";
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

router.use(verifyToken);

router.get("/:id", getUrlsByUserId);
router.post("/", addUrl);
router.delete("/:id", deleteUrl);

export default router;
