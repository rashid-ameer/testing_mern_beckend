import mongoose from "mongoose";
import z from "zod";

export const idSchema = z.string().refine((id)=> mongoose.Types.ObjectId.isValid(id),{
  message:"Invalid id"
})

export const createPostSchema = z.object({
  title: z.string().trim().min(1,"Post title is required"),
  content: z.string().trim().min(1,"Post content is required")
})