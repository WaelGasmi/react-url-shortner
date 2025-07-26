import { Request, Response } from "express";
import Url from "../models/Url";
import User from "../models/User";
import mongoose from "mongoose";
import { RequestWithUser } from "../types/IUser";
import { IUrl } from "../types/IUrl";

export const getUrlsByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    if (!userId)
      return res.status(404).json({ message: "user id is required" });

    if (!mongoose.Types.ObjectId.isValid(userId))
      return res.status(404).json({ message: "ID Format Wrong" });

    const existUser = await User.findById(userId);

    if (!existUser)
      return res.status(404).json({ message: "user id not found" });

    const urls = await Url.find({ userId });

    if (urls.length === 0)
      return res.status(404).json({ message: "no urls found" });

    return res.status(200).json({ message: "success", urls });
  } catch (error) {
    console.error("Error in getUrlsByUserId:", error);
    return res.status(500).json({ message: "fetching urls for user failed" });
  }
};

export const addUrl = async (req: RequestWithUser, res: Response) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl)
      return res.status(404).json({ message: "url is required" });

    const userId = req.user?._id.toString();

    const newUrl = new Url({
      originalUrl,
      userId,
    });

    await newUrl.save();

    return res.status(200).json({ message: "sucess", url: newUrl });
  } catch (error) {
    console.error("Error in addUrl:", error);

    return res.status(500).json({ message: "adding url failed" });
  }
};

export const deleteUrl = async (req: RequestWithUser, res: Response) => {
  try {
    const urlId = req.params.id;
    const userId = req.user?._id;

    if (!urlId) return res.status(404).json({ message: "url required" });

    const url = await Url.findById(urlId);

    if (!url) {
      return res.status(404).json({ message: "URL not found" });
    }

    if (!userId || url.userId.toString() !== userId.toString()) {
      return res.status(401).json({ message: "url not yours" });
    }

    await Url.deleteOne({ _id: urlId });

    return res.status(200).json({ message: "sucess" });
  } catch (error) {
    return res.status(500).json({ message: "adding url failed" });
  }
};
