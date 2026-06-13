import { Router } from "express";
import { authUser } from "../middleware/auth.middleware.js";
import * as runController from "../controllers/run.controller.js";
const router = Router();
router.post("/run",authUser,runController.runCode);
export default router;