import { HTTP_CODES } from "../constants";
import { ApiResponse, asyncHandler } from "../lib";
import { getHashPassword } from "../lib/password";
import { idSchema } from "../schemas/common.schemas";
import { createUserSchema } from "../schemas/user.schemas";
import { createUser, getUser } from "../services/user.services";

export const createUserHandler = asyncHandler(async (req,res)=>{
  const request = createUserSchema.parse(req.body);
  const password = await getHashPassword(request.password);
  const user = await createUser({...request,password});
  res.status(HTTP_CODES.CREATED).json(new ApiResponse("User created successfully", user));
})

export const getUserHandler = asyncHandler(async (req,res)=>{
  const request = idSchema.parse(req.params.id);
  const user =await getUser(request);
  res.status(HTTP_CODES.OK).json(new ApiResponse("Fetched user successfully", user));
});