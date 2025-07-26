import { urlApi } from "@/services/api/urlApi";
import type { ApiResponse } from "@/types/ApiResponse";
import type { Url } from "@/types/Url";
import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { UrlContext } from "../contexts/urlContext";
import { useAuth } from "@/hooks/useAuth";

export const UrlProvider = ({ children }: { children: React.ReactNode }) => {
  const [urls, setUrls] = useState<Url[]>([]);
  const { addUrlApi, getUrlApi, deleteUrlApi, getShortUrlApi } = useMemo(
    () => urlApi(),
    []
  );
  const { user } = useAuth();

  useEffect(() => {
    const fetchUrls = async () => {
      await getUrls(user?._id || "");
    };

    fetchUrls();
  }, [urls]);

  const addUrl = async (originalUrl: string) => {
    const res: ApiResponse = await addUrlApi(originalUrl);
    if (res && res.message === "success" && res.urls) {
      await getUrls(user?._id || "");
    }
  };

  const getUrls = async (userId: string) => {
    const res: ApiResponse = await getUrlApi(userId);
    if (res && res.message === "success") {
      setUrls(res.urls || []);
    }
  };

  const deleteUrl = async (_id: string) => {
    const res: ApiResponse = await deleteUrlApi(_id);
    if (res && res.message === "success") {
      await getUrls(user?._id || "");
    }
  };

  const getShortUrl = async (shortUrl: string) => {
    const res: ApiResponse = await getShortUrlApi(shortUrl);
  };

  return (
    <UrlContext.Provider
      value={{ urls, addUrl, getUrls, deleteUrl, getShortUrl }}
    >
      {children}
    </UrlContext.Provider>
  );
};
