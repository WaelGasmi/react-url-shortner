import { AuthContext } from "@/services/contexts/authContext";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthContext undefined");
  return context;
};
