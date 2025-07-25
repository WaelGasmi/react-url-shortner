import { api } from "@/axios/api";
import type { Url } from "@/types/Url";

export const urlApi = () => {
  const addUrlApi = async (url: Url) => {
    try {
      const res = await api.post("/url", url);
      if (res && res.data) return res.data;
    } catch (error) {
      console.log("Erro on  add url api", error);
    }
  };

  const getUrlApi = async (userId: string) => {
    try {
      const res = await api.get(`/url/${userId}`);
      if (res && res.data) return res.data;
    } catch (error) {
      console.log("Erro on get url api", error);
    }
  };

  const deleteUrlApi = async (urlId: string) => {
    try {
      const res = await api.get(`/url/${urlId}`);
      if (res && res.data) return res.data;
    } catch (error) {
      console.log("Erro on delete url api", error);
    }
  };

  return { addUrlApi, getUrlApi, deleteUrlApi };
};
