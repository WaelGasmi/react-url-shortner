import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password length must be at least 6"),
});

export const userSigningUpSchema = z.object({
  firstName: z.string().min(1, "First name required"),
  lastName: z.string().min(1, "Last name required"),
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password length must be at least 6"),
});
