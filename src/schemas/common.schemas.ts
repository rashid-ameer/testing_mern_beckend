import mongoose from "mongoose";
import { z } from "zod";

export const idSchema = z
  .string()
  .refine((id) => mongoose.Types.ObjectId.isValid(id), {
    message: "Invalid id",
  });
