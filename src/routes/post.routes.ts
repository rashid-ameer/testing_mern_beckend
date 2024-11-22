import { Router } from "express";
import { createPostHandler, deletePostHandler, getPostHandler, getPostsHandler } from "../controllers/post.controllers";

const router = Router();

// defining routes
router.get("/",getPostsHandler);
router.get("/:id", getPostHandler);
router.post("/create",createPostHandler);
router.delete("/delete/:id", deletePostHandler);

export default router;