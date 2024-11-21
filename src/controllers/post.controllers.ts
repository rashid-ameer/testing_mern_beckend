import { HTTP_CODES } from "../constants";
import { ApiError, ApiResponse, asyncHandler } from "../lib";
import { idSchema } from "../lib/validation";
import PostModel from "../models/post.models";

export const getPosts = asyncHandler(async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(new ApiResponse("Fetched posts successfully", posts));
});

export const getPost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const result = idSchema.safeParse(id);
  
  if (!result.success) {
    throw new ApiError(HTTP_CODES.BAD_REQUEST, "Invalid post id");
  }

  const post = await PostModel.findById(id);
  if (!post) {
    throw new ApiError(HTTP_CODES.NOT_FOUND, "Post not found");
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
    throw new ApiError(HTTP_CODES.INTERNAL_SERVER_ERROR, "Unable to create post. Try again");
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
    throw new ApiError(HTTP_CODES.NOT_FOUND, "Post not found");
  }

  res.status(204).send();
});
