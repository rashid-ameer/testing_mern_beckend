import { Router } from "express";
import { createUserHandler, getUserHandler,  } from "../controllers/user.controller";

const userRouter = Router();

// defining routes
userRouter.post("/create", createUserHandler);
userRouter.get("/:id", getUserHandler);

export default userRouter;