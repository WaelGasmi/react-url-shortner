import type { Url } from "./Url";

export type UrlContextType = {
  urls: Url[];
  addUrl: (originalUrl: string) => Promise<void>;
  getUrls: (userId: string) => Promise<void>;
  deleteUrl: (_id: string) => Promise<void>;
  getShortUrl: (shortUrl: string) => Promise<void>;
};
