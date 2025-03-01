import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT,
  frontendUrl: process.env.FRONTEND_URL,
};
