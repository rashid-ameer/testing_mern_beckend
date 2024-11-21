import assert from "node:assert";
import HTTP_CODES from "../constants/http-codes";
import ApiError from "./api-error";

type AppAssert = (condition: any, httpCode: HTTP_CODES, message: string)=> asserts condition;

const appAssert: AppAssert = (condition, httpCode, message)=> assert (condition, new ApiError(httpCode,message));

export default appAssert;
