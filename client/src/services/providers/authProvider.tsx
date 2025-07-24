import React, { useEffect, useMemo, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import type { User, UserLogin, UserSignup } from "@/types/User";
import { authApi } from "../api/authApi";
import type { Response } from "@/types/Response";

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { loginApi, signupApi, logoutApi, isAtuhenticated } = useMemo(
    () => authApi(),
    []
  );

  useEffect(() => {
    const loadUserAuth = async () => {
      try {
        const res: Response = await isAtuhenticated();
        if (res && res.user) setUser(res.user);
        else setUser(null);
      } catch (error) {
        console.log(error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUserAuth();
  }, [isAtuhenticated]);

  const login = async (user: UserLogin): Promise<boolean> => {
    const res: Response = await loginApi(user);
    if (res && res.message === "success" && res.user) {
      setUser(res.user);
      return true;
    }
    return false;
  };

  const signup = async (user: UserSignup) => {
    const res: Response = await signupApi(user);
    if (res && res.message === "success") return true;
    return false;
  };

  const logout = async () => {
    const res: Response = await logoutApi();
    if (res && res.message === "success") {
      setUser(null);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
