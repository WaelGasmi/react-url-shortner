import express from "express";
import { setupRoutes } from "./routes/index";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan(process.env.NODE_ENV === "development" ? "dev" : "combined"));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://react-url-shortner-two.vercel.app",
    ],
    credentials: true,
  })
);
app.use(helmet());

setupRoutes(app);

export default app;
