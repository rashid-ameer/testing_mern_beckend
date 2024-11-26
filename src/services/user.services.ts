import { HTTP_CODES } from "../constants";
import { ApiError } from "../lib";
import { UserModel } from "../models";

type CreateUser = {
  username: string,
  name: string,
  email:string,
  password: string;
}
export const createUser = async(data: CreateUser)=>{
  const user = await UserModel.create(data);
  if (!user) {
    throw new ApiError(HTTP_CODES.INTERNAL_SERVER_ERROR, "Unable to create user. Try again");
  }
  return user;
}

export const getUser = async (id: string)=>{
  const user = await UserModel.findById(id);
  if (!user) {
    throw new ApiError(HTTP_CODES.NOT_FOUND, "User not found");
  }
  return user;
}