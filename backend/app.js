import express from "express";
import cookieParser from "cookie-parser";

export const app = express();

// setup built-in middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
