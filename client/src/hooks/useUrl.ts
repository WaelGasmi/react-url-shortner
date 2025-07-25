import { urlApi } from "@/services/api/urlApi";
import type { ApiResponse } from "@/types/ApiResponse";
import type { Url } from "@/types/Url";

export const useUrl = () => {
  const { addUrlApi, getUrlApi, deleteUrlApi } = urlApi();

  const addUrl = async (url: Url) => {
    const res: ApiResponse = await addUrlApi(url);
    if (res && res.message === "success") return true;
    return false;
  };

  const getUrls = async (userId: string) => {
    const res: ApiResponse = await getUrlApi(userId);
    if (res && res.message === "success") return res.urls;
    return [];
  };

  const deleteUrl = async (urlId: string) => {
    const res: ApiResponse = await deleteUrlApi(urlId);
    if (res && res.message === "success") return true;
    return false;
  };

  return { addUrl, getUrls, deleteUrl };
};
