import { RequestHandler } from "express";

type AsyncHandler = (fn: RequestHandler)=> RequestHandler;

const asyncHandler:AsyncHandler = (fn)=> async (req,res,next)=>{
  try {
    await fn(req,res,next);
  } catch (error) {
    next(error);
  }
}

export default asyncHandler;