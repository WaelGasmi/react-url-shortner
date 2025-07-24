import mongoose, { Document, Types } from "mongoose";

export type IUrl = Document & {
  _id: Types.ObjectId;
  originalUrl: string;
  shortUrl: string;
  visited: number;
  userId: mongoose.Types.ObjectId;
};
