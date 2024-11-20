import mongoose from "mongoose";
import { MONGODB_URI } from "../constants/env";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(MONGODB_URI);
    console.log(`Connected to database: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Error connecting to database: ", error);
    process.exit(1);
  }
};

export default connectDB;