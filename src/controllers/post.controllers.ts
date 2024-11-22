import { ApiResponse, asyncHandler } from "../lib";
import { createPostSchema, idSchema } from "../lib/validation";
import { createPost, deletePost, getPost, getPosts } from "../services/post.services";

export const getPostsHandler = asyncHandler(async (req, res) => {
  const posts = getPosts();
  res.status(200).json(new ApiResponse("Fetched posts successfully", posts));
});

export const getPostHandler = asyncHandler(async (req, res) => {
  const result = idSchema.parse(req.params.id);
  const post = await getPost(result);
  res.status(200).json(new ApiResponse("Fetch post successfully", post));
});

export const createPostHandler = asyncHandler(async (req, res) => {
  const result = createPostSchema.parse(req.body);
  const post = await createPost(result);
  res.status(201).json(new ApiResponse("Post created successfully", post));
});

export const deletePostHandler = asyncHandler(async (req, res) => {
  const result = idSchema.parse(req.params.id);
  await deletePost(result);
  res.status(204).send();
});
