import { Request, Response } from "express";
import Url from "../models/Url";

export const getShortUrl = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ error: "Missing URL ID parameter" });
  }

  try {
    const url = await Url.findOne({ shortUrl: id });

    if (!url) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    url.visited += 1;
    await url.save();

    return res.redirect(url.originalUrl);
  } catch (error: any) {
    console.error("Error in getShortUrl:", error.message || error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
