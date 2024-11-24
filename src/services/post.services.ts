import { HTTP_CODES } from "../constants";
import { ApiError } from "../lib";
import { PostModel } from "../models";

type CreatePost = {
  title: string;
  content: string;
};
export const createPost = async ({ title, content }: CreatePost) => {
  const post = await PostModel.create({ title, content });
  if (!post) {
    throw new ApiError(
      HTTP_CODES.INTERNAL_SERVER_ERROR,
      "Unable to create post. Try again"
    );
  }
  return post;
};

export const getPost = async (id: string) => {
  const post = await PostModel.findById(id);
  if (!post) {
    throw new ApiError(HTTP_CODES.NOT_FOUND, "Post not found");
  }
  return post;
};

export const getPosts = async () => {
  const posts = await PostModel.find();
  return posts;
};

export const deletePost = async (id: string) => {
  const result = await PostModel.deleteOne({ _id: id });
  if (result.deletedCount === 0) {
    throw new ApiError(HTTP_CODES.NOT_FOUND, "Post not found");
  }
};
type UpdatePost = {
  id: string;
  title?: string;
  content?: string;
};
export const updatePost = async ({ id, title, content }: UpdatePost) => {
  const post = await PostModel.findById(id);
  if (!post) {
    throw new ApiError(HTTP_CODES.NOT_FOUND, "Post not found");
  }

  if (title) {
    post.title = title;
  }
  if (content) {
    post.content = content;
  }

  return await post.save();
};
