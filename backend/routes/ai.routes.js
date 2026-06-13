import { Router } from "express";
import { autoFix, getResult } from "../controllers/ai.controller.js";

const router = Router();
router.get("/get-result", getResult);
router.post("/autofix",autoFix);

export default router;
