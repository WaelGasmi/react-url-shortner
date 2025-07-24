import { api } from "@/axios/api";
import type { UserLogin, UserSignup } from "@/types/User";

export const authApi = () => {
  const loginApi = async (user: UserLogin) => {
    try {
      const res = await api.post("auth/login", user);
      if (res && res.data) return res.data;
    } catch (error) {
      console.log("Login Api Error", error);
    }
  };

  const signupApi = async (user: UserSignup) => {
    try {
      const res = await api.post("auth/signup", user);
      if (res && res.data) return res.data;
    } catch (error) {
      console.log("Signup Api Error", error);
    }
  };

  const logoutApi = async () => {
    try {
      const res = await api.post("auth/logout");
      if (res && res.data) return res.data;
    } catch (error) {
      console.log("Logout Api Error", error);
    }
  };

  const isAtuhenticated = async () => {
    try {
      const res = await api.get("auth/isAuthenticated");
      if (res && res.data) return res.data;
    } catch (error) {
      console.log("Is atuhenticated Error", error);
    }
  };

  return { loginApi, signupApi, logoutApi, isAtuhenticated };
};
