import { ErrorRequestHandler } from "express";
import ApiError from "../lib/api-error";
import HTTP_CODES from "../constants/http-codes";
import { ZodError } from "zod";

const errorHandler: ErrorRequestHandler = (err,req,res,next)=>{
  console.log("---------------- Error ----------------");
  console.log(`Path: ${req.path} - Method: ${req.method}`);
  console.log(err);

  if (err instanceof ApiError){
    res.status(err.httpCode).json({success: false,message: err.message});
    return;
  }

  if (err instanceof ZodError) {
    res.status(HTTP_CODES.BAD_REQUEST).json({success: false, message: err.errors[0].message});
    return;
  }

  res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).json({success:false,message:"Internal server error"});
}

export default errorHandler;