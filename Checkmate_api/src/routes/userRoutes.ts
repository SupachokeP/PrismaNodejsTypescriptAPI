import express from "express";
import {
  getUserByTokenController,
  getUserController,
} from "../controllers/userController";
import { verifyToken } from "../middleware/VerifyToken";

const router = express.Router();

//update user
// router.put("/updateuser/:id", verifyToken, update);

// //delete user
// router.delete("/deleteuser/:id", verifyToken, deleteUser);

//get a user
router.get("/getuser/:id", verifyToken, getUserController);
router.get("/getuserbytoken", verifyToken, getUserByTokenController);

export default router;
