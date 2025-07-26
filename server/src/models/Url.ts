import mongoose from "mongoose";
import { IUrl } from "../types/IUrl";
import { nanoid } from "nanoid";

const urlSchema = new mongoose.Schema<IUrl>(
  {
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, default: "", unique: true },
    visited: { type: Number, default: 0 },
    userId: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

urlSchema.pre<IUrl>("save", async function (next) {
  try {
    this.shortUrl = nanoid(6);
    next();
  } catch (error: unknown) {
    if (error instanceof Error) next(error);
    else console.log("short url hashing failed");
  }
});

const Url = mongoose.model<IUrl>("Url", urlSchema);

export default Url;
