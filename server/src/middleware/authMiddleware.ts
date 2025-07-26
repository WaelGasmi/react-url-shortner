import { NextFunction, Request, Response } from "express";
import User from "../models/User";
import { RequestWithUser } from "../types/IUser";
import { decodeToken } from "../utils/jwt";

export const verifyToken = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;

  if (!token) return res.status(404).json({ message: "not token provided" });

  try {
    const decoded = decodeToken(token);

    if (!decoded?.userId)
      return res.status(404).json({ message: "unauthorized" });

    const user = await User.findById(decoded?.userId).select("-password");

    if (!user) return res.status(404).json({ message: "user not found" });

    req.user = user;

    next();
  } catch (error) {
    res.status(404).json({ message: "Authentication Failed" });
  }
};
