import { HTTP_CODES } from "../constants";
import { ApiResponse, asyncHandler } from "../lib";
import { authCookies } from "../lib/cookies";
import { createUserSchema } from "../schemas/user.schemas";
import { createUser } from "../services/auth.services";

export const createUserHandler = asyncHandler(async (req,res)=>{
  const request = createUserSchema.parse(req.body);
  const {newUser, accessToken, refreshToken} = await createUser(request);
  authCookies(res,refreshToken,accessToken).status(HTTP_CODES.CREATED).json(new ApiResponse("User created successfully", newUser));
})

