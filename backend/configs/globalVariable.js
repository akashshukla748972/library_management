import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT,
  frontendUrl: process.env.FRONTEND_URL,
  mongoDbUrl: process.env.MONGODB_URL,
  databaseName: process.env.DATABASE_NAME,
};
