import mongoose from "mongoose";
import { IPost } from "../types/model.types";

const postSchema = new mongoose.Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Post", postSchema);
export default PostModel;
