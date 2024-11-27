import { HTTP_CODES } from "../constants";
import { ApiResponse, asyncHandler } from "../lib";
import { idSchema } from "../schemas/common.schemas";
import { getUser } from "../services/user.services";

export const getUserHandler = asyncHandler(async (req, res) => {
  const request = idSchema.parse(req.params.id);
  const user = await getUser(request);
  res
    .status(HTTP_CODES.OK)
    .json(new ApiResponse("Fetched user successfully", user));
});
