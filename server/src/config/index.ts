import dotenv from "dotenv";

dotenv.config();

if (!process.env.JWT_EXPIRES) {
  throw new Error("Missing JWT_EXPIRES in environment");
}

export const PORT = process.env.PORT;
export const MONGO_URI = process.env.MONGO_URI;
export const MONGO_DB = process.env.MONGO_DB;
export const NODE_ENV = process.env.NODE_ENV;
export const JWT_EXPIRES = process.env.JWT_EXPIRES;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
