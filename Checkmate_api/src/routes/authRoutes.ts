import express from "express";
import {
  signupController,
  loginController,
} from "../controllers/authController";
import { verifyToken } from "../middleware/VerifyToken";
import { signupValidation } from "../validators/SignupValidation";

const router = express.Router();

router.post("/signup", signupValidation, signupController);
router.post("/signin", loginController);

export default router;
