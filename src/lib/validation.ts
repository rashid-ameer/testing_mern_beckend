import mongoose from "mongoose";
import z from "zod";

export const idSchema = z.string().refine((id)=> mongoose.Types.ObjectId.isValid(id),{
  message:"Invalid id"
})

export const createPostSchema = z.object({
  title: z.coerce.string({required_error:"Post title is required"}).trim(),
  content: z.coerce.string({required_error:"Post title is required"}).trim()
})

export const updatePostSchema = z.object({
  id: idSchema,
  title: z.coerce.string().optional(),
  content: z.coerce.string().optional(),
})
