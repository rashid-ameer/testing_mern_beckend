import { Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser extends Document {
  username: string;
  name: string;
  email: string;
  emailVerified: boolean;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
