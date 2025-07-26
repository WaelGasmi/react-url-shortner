import express from "express";
import { getShortUrl } from "../controllers/shortUrlController";

const router = express.Router();

router.get("/:id", getShortUrl);

export default router;
