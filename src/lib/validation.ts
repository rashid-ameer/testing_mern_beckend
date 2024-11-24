import mongoose from "mongoose";
import z from "zod";

export const idSchema = z.string().refine((id)=> mongoose.Types.ObjectId.isValid(id),{
  message:"Invalid id"
})

export const createPostSchema = z.object({
  title: z.string({required_error:"Post title is required", invalid_type_error:"Post title must be string"}).trim(),
  content: z.string({required_error:"Post title is required", invalid_type_error:"Post title must be string"}).trim()
})