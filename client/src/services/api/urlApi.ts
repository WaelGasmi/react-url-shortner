import { api } from "@/axios/api";

export const urlApi = () => {
  const addUrlApi = async (originalUrl: string) => {
    try {
      const res = await api.post("/url", { originalUrl });
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

  const deleteUrlApi = async (_id: string) => {
    try {
      const res = await api.delete(`/url/${_id}`);
      if (res && res.data) return res.data;
    } catch (error) {
      console.log("Erro on delete url api", error);
    }
  };

  const getShortUrlApi = async (shortUrl: string) => {
    try {
      const res = await api.get(`/shortUrl/${shortUrl}`);
      if (res && res.data) return res.data;
    } catch (error) {
      console.log("Erro on get shorl url api", error);
    }
  };

  return { addUrlApi, getUrlApi, deleteUrlApi, getShortUrlApi };
};
