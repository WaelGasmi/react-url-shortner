import { Request } from "express";
import { Document, Types } from "mongoose";

export type IUser = Document & {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
};

export interface RequestWithUser extends Request {
  user?: IUser;
}
