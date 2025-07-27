import jwt, { SignOptions } from "jsonwebtoken";
import { CookieOptions, Response } from "express";

const cookieOptions: CookieOptions = {
  httpOnly: true,
  sameSite: "none",
  secure: process.env.NODE_ENV === "production",
  maxAge: 24 * 60 * 60 * 1000,
};

const options: SignOptions = { expiresIn: "1d" };

export const generateTokenAndSetCookie = (res: Response, userId: string) => {
  const token = jwt.sign(
    { userId },
    process.env.JWT_SECRET_KEY as string,
    options
  );
  res.cookie("token", token, cookieOptions);
};

export const decodeToken = (token: string) => {
  if (!process.env.JWT_SECRET_KEY) throw new Error("JWT_SECRET_KEY undefined");

  return jwt.verify(token, process.env.JWT_SECRET_KEY) as jwt.JwtPayload & {
    userId: string;
  };
};
