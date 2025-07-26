import { Express, Request, Response } from "express";
import AuthRouter from "./authRoutes";
import UrlRouter from "./urlRoutes";
import ShortUrlRouter from "./shortUrlRoutes";
import { NotFoundMiddleware } from "../middleware/NotFounfMiddleware";

export const setupRoutes = (app: Express) => {
  app.use("/auth", AuthRouter);
  app.use("/url", UrlRouter);
  app.use("/shortUrl", ShortUrlRouter);
  app.use(NotFoundMiddleware);
};
