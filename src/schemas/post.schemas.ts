import z from "zod";
import { idSchema } from "./common.schemas";

// Post Controller

export const createPostSchema = z.object({
  title: z.coerce.string({ required_error: "Post title is required" }).trim(),
  content: z.coerce.string({ required_error: "Post title is required" }).trim(),
});

export const updatePostSchema = z.object({
  id: idSchema,
  title: z.coerce.string().optional(),
  content: z.coerce.string().optional(),
});

