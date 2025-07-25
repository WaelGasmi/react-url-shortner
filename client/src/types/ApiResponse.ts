import type { Url } from "./Url";
import type { User } from "./User";

export type ApiResponse = {
  message: string;
  user?: User | null;
  urls?: Url[] | null;
};
