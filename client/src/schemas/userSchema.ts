import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.email("invalid email"),
  password: z.string().min(6, "password length must be at least 6"),
});

export const userSigningupSchema = z.object({
  firstNmae: z.string(),
  lastName: z.string(),
  email: z.email("invalid email"),
  password: z.string().min(6, "password length must be at least 6"),
});
