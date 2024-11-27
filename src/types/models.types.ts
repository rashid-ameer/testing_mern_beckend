import mongoose, { Document } from "mongoose";
import { VericationType } from "../constants";

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

export interface IVerificationCode extends Document{
  userId: mongoose.Types.ObjectId,
  type: VericationType,
  code: string,
  expiryDate: Date
}