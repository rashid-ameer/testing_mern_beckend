import express from "express";
import postRoutes from "./routes/post.routes";

// creating app
const app = express();

// adding middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/post", postRoutes);

// exporting
export default app;
