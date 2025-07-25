import type { UrlContextType } from "@/types/urlContextType";
import { createContext } from "react";

export const UrlContext = createContext<UrlContextType | undefined>(undefined);
