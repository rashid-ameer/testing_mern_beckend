import mongoose from "mongoose";
import z from "zod";

// Post Controller
export const idSchema = z
  .string()
  .refine((id) => mongoose.Types.ObjectId.isValid(id), {
    message: "Invalid id",
  });

export const createPostSchema = z.object({
  title: z.coerce.string({ required_error: "Post title is required" }).trim(),
  content: z.coerce.string({ required_error: "Post title is required" }).trim(),
});

export const updatePostSchema = z.object({
  id: idSchema,
  title: z.coerce.string().optional(),
  content: z.coerce.string().optional(),
});

// User Controller
export const createUserSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
      invalid_type_error: "Username must be a string",
    })
    .trim()
    .min(2, { message: "Username must be at least 2 characters long" })
    .max(50, { message: "Username can be a maximum of 50 characters long" })
    .regex(/^[a-zA-Z0-9-]+$/, {
      message: "Username can only contain letters, numbers or hyphens.",
    }),
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .trim()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name can be a maximum of 50 characters long" }),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email needs to be a string",
    })
    .email({ message: "Invalid email syntax" }),
  password: z
    .string({
      message: "Password is required",
      invalid_type_error: "Password must a string",
    })
    .min(8, { message: "Password must be atleast 8 characters" })
    .max(20, { message: "Password can be maximum of 20 characters long" })
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/, {
      message:
        "Password must contain at least 1 number, 1 uppercase, 1 lowercase and 1 special character",
    }),
});
