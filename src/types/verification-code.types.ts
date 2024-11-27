import mongoose from "mongoose";
import { VericationType } from "../constants";

export interface IVerificationCode extends Document{
  userId: mongoose.Types.ObjectId,
  type: VericationType,
  code: string,
  expiryDate: Date
}