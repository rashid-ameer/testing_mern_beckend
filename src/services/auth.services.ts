import { HTTP_CODES } from "../constants";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../constants/env";
import { ApiError } from "../lib";
import { getHashPassword } from "../lib/password";
import { UserModel } from "../models";
import jwt from "jsonwebtoken";

type CreateUser = {
  username: string,
  name: string,
  email:string,
  password: string;
}
export const createUser = async(data: CreateUser)=>{
  const existingUser = await UserModel.find({email: data.email});
  if (existingUser){
    throw new ApiError(HTTP_CODES.CONFLICT, "Email already exists");
  }
  const password = await getHashPassword(data.password);
  const newUser = await UserModel.create({...data,password});
  if (!newUser) {
    throw new ApiError(HTTP_CODES.INTERNAL_SERVER_ERROR, "Unable to create user. Try again");
  }
  const accessToken = jwt.sign({userId: newUser._id},ACCESS_TOKEN_SECRET,{expiresIn:"10m"});
  const refreshToken = jwt.sign({userId: newUser._id}, REFRESH_TOKEN_SECRET, {expiresIn:"15d"});

  return {newUser,accessToken,refreshToken};
}

