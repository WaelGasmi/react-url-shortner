import { Request, Response } from "express";

export const NotFoundMiddleware = async (req: Request, res: Response) => {
  res.status(404).json({ error: "Route Not Found" });
};
