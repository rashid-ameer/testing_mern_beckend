import { Response, CookieOptions } from "express";
import { NODE_ENV } from "../constants/env";

const defaultAuthCookieOptions: CookieOptions = {
  sameSite: "strict",
  httpOnly: true,
  secure: NODE_ENV === "production",
};
const refreshCookieOptions: CookieOptions = {
  ...defaultAuthCookieOptions,
  expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
};
const accessCookieOptions: CookieOptions = {
  ...defaultAuthCookieOptions,
  expires: new Date(Date.now() + 10 * 60 * 1000),
};

export const authCookies = (
  res: Response,
  refreshToken: string,
  accessToken: string
) => {
  return res
    .cookie("refreshToken", refreshToken, refreshCookieOptions)
    .cookie("accessToken", accessToken, accessCookieOptions);
};
