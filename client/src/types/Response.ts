import type { User } from "./User";

export type Response = {
  message: string;
  user?: User | null;
};
