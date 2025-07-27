import { Request, Response } from "express";
import User from "../models/User";
import { cookieOptions, generateTokenAndSetCookie } from "../utils/jwt";
import { IUser, RequestWithUser } from "../types/IUser";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(404).json({ message: "All fieldss are required" });

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "user not found" });

    const isMatch = await user.comparePassword(password);

    if (!isMatch) return res.status(404).json({ message: "Password wrong" });

    if (user._id) generateTokenAndSetCookie(res, user._id.toString());

    return res.status(200).json({
      message: "success",
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Login Failed" });
  }
};

export const signup = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password)
    return res.status(404).json({ message: "All fieldss are required" });

  try {
    const ExistUser = await User.findOne({ email });
    console.log(ExistUser);
    if (ExistUser)
      return res.status(404).json({ message: "Email already used" });

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });
    await newUser.save();

    generateTokenAndSetCookie(res, newUser._id.toString());

    return res.status(200).json({
      message: "Signing up success",
      user: { firstName, lastName, email },
    });
  } catch (error) {
    return res.status(500).json({ message: "success" });
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("token", cookieOptions);
  return res.status(200).json({ message: "success" });
};

export const isAuthenticated = async (req: RequestWithUser, res: Response) => {
  if (!req.user)
    return res.status(404).json({ message: "user not authenticated token" });
  return res.status(200).json({ user: req.user });
};
