import PostModel from "../models/post.models";
import asyncHandler from "../lib/async-handler";
import ApiResponse from "../lib/api-response";

export const getPosts = asyncHandler(async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(new ApiResponse("Fetched posts successfully", posts));
});

export const getPost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "Post id is required" });
    return;
  }

  const post = await PostModel.findById(id);
  if (!post) {
    res.status(404).json({ message: "Post not found" });
    return;
  }

  res.status(200).json(new ApiResponse("Fetch post successfully", post));
});

export const createPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  const post = await PostModel.create({ title, content });

  if (!post) {
    res.status(500).json({ message: "Unable to create post. Try again" });
    return;
  }

  res.status(201).json(new ApiResponse("Post created successfully", post));
});

export const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "Post id is required" });
    return;
  }

  const deletedPost = await PostModel.deleteOne({ _id: id });
  if (deletedPost.deletedCount === 0) {
    res.status(404).json({ message: "Post not found" });
    return;
  }
  res.status(204).send();
});
