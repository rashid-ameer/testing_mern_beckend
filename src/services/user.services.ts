import { HTTP_CODES } from "../constants";
import { ApiError } from "../lib";
import { UserModel } from "../models";

export const getUser = async (id: string)=>{
  const user = await UserModel.findById(id);
  if (!user) {
    throw new ApiError(HTTP_CODES.NOT_FOUND, "User not found");
  }
  return user;
}