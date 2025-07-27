import mongoose from "mongoose";

export const connectDb = async () => {
  if (!process.env.MONGO_URI) throw new Error("Mongo uri undefined");
  try {
    await mongoose.connect(process.env.MONGO_URI);
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
