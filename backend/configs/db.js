import mongoose from "mongoose";
import { config } from "./globalVariable.js";

export const connectDB = () => {
  mongoose
    .connect(config.mongoDbUrl, {
      dbName: config.databaseName,
    })
    .then(() => {
      console.log("database connected");
    })
    .catch((error) => {
      console.log("Error while connecting database: ", error);
    });
};
