import { Router } from "express";
import { createPostHandler, deletePostHandler, getPostHandler, getPostsHandler, getUpdatePostHandler } from "../controllers/post.controllers";

const router = Router();

// defining routes
router.get("/",getPostsHandler);
router.get("/:id", getPostHandler);
router.post("/create",createPostHandler);
router.delete("/delete/:id", deletePostHandler);
router.patch("/update/:id", getUpdatePostHandler);

export default router;