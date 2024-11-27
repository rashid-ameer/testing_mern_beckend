import { Router } from "express";
import { getUserHandler } from "../controllers/user.controller";

const router = Router();

// defining routes
router.get("/:id", getUserHandler);

export default router;