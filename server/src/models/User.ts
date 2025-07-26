import mongoose, { model } from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from "../types/IUser";

const userSchema = new mongoose.Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
  },
  { timestamps: true }
);

userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);

    next();
  } catch (error: unknown) {
    if (error instanceof Error) next(error);
    else console.log("Password hashing failed");
  }
});

userSchema.methods.comparePassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

const User = model<IUser>("User", userSchema);

export default User;
