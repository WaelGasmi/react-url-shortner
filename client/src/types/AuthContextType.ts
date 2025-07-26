import type { User, UserLogin, UserSignup } from "./User";

export type authContextType = {
  user: User | null;
  loading: boolean;
  login: (user: UserLogin) => Promise<boolean>;
  signup: (user: UserSignup) => Promise<boolean>;
  logout: () => void;
};
