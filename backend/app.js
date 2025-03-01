import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "./configs/globalVariable.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

export const app = express();

// setup built-in middleware
app.use(
  cors({
    origin: [config.frontendUrl],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorMiddleware);
