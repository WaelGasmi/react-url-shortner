import { Express, Request, Response } from "express";
import AuthRouter from "./authRoutes";
import UrlRouter from "./urlRoutes";
import { NotFoundMiddleware } from "../middleware/NotFounfMiddleware";

export const setupRoutes = (app: Express) => {
  app.use("/auth", AuthRouter);
  app.use("/url", UrlRouter);
  app.use(NotFoundMiddleware);
};
