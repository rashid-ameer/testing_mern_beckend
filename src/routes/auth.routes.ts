import { Router } from "express";
import { createUserHandler} from "../controllers/auth.controller";

const userRouter = Router();

// defining routes
userRouter.post("/create", createUserHandler);

export default userRouter;