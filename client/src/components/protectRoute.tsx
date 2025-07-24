import { useAuth } from "@/hooks/useAuth";
import type React from "react";
import { Navigate } from "react-router-dom";

type protectRouteProps = { children: React.ReactNode };

export default function ProtectRoute({ children }: protectRouteProps) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to={"/login"} replace />;

  return children;
}
