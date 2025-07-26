import { UrlContext } from "@/services/contexts/urlContext";
import { useContext } from "react";

export const useUrl = () => {
  const context = useContext(UrlContext);
  if (!context) throw new Error("url context is undefined");
  return context;
};
