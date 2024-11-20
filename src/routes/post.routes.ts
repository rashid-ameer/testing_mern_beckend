import { Router } from "express";
import { createPost, deletePost, getPost, getPosts } from "../controllers/post.controllers";

const router = Router();

// defining routes
router.get("/",getPosts);
router.get("/:id", getPost);
router.post("/create",createPost);
router.delete("/delete/:id", deletePost);

export default router;