import type { authContextType } from "@/types/AuthContextType";
import { createContext } from "react";

export const AuthContext = createContext<authContextType | undefined>(
  undefined
);
