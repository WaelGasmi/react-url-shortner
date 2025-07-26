import mongoose from "mongoose";
import { MONGO_URI } from "../config";

export const connectDb = async () => {
  if (!MONGO_URI) throw new Error("Mongo uri undefined");
  try {
    await mongoose.connect(MONGO_URI);
    mongoose.connection.on("open", () => {
      console.log("MongoDb connected");
    });
    mongoose.connection.on("reconnected", () => {
      console.log("MongoDb reconnected");
    });
    mongoose.connection.on("error", () => {
      console.log("MongoDb error");
    });
    mongoose.connection.on("disconnected", () => {
      console.log("MongoDb disconnected");
    });
  } catch (error) {
    console.log(`Mongodb not connecting ${error}`);
  }
};
