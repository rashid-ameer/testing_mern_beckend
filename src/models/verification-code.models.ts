import mongoose from "mongoose";
import { IVerificationCode } from "../types/verification-code.types";

const verificationCodeSchema = new mongoose.Schema<IVerificationCode>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:"User",
      index: true,
    },
    type: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);


const VerificationCodeModel = mongoose.model<IVerificationCode>("VerificationCode",verificationCodeSchema,"verification_codes");
export default VerificationCodeModel;