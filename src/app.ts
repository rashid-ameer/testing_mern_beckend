import express from "express";
import { errorHandler } from "./middlewares";
import { postRoutes } from "./routes";

// creating app
const app = express();

// adding middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/post", postRoutes);

// error handler middleware
app.use(errorHandler);

// exporting
export default app;
