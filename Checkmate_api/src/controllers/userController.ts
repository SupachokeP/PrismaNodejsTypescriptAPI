import bcrypt from "bcrypt";
// import User   from "../models/UserModel";
import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import { sqlConnection, sqlTransaction } from "../utils/db";
import { register, findUserByUserId } from "../service/auth.service";
import { createError } from "../middleware/error";
export const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sql = await sqlConnection();
    const pool = sql.request();
    const userData = await findUserByUserId(req.params.id, pool);
    if (!userData) next(createError(401, "User not found!"));
    return res.status(200).json({
      success: true,
      message: "Success",
      data: userData,
    });
  } catch (error: any) {
    next(error);
  }
};
export const getUserByTokenController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sql = await sqlConnection();
    const pool = sql.request();
    const userId = req.user?.userId != undefined ? req.user?.userId : null; // userid from token
    if (typeof userId === "string") {
      const userData = await findUserByUserId(userId, pool);
      return res.status(200).json({
        success: true,
        message: "Success",
        data: userData,
      });
    } else {
      next(createError(401, "User not found!"));
    }
  } catch (error: any) {
    next(error);
  }
};
// export const loginController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const sql = await sqlConnection();
//     const pool = sql.request();
//     const { UserId, Password: requestPassword } = req.body;
//     const userData = await findUserByUserId(UserId, pool);
//     if (userData != null) {
//       const token = await generateToken(userData, requestPassword);
//       res
//         .cookie("access_token", token, {
//           httpOnly: true,
//         })
//         .status(200)
//         .json({ message: "Login successful", token: token });
//     } else {
//       next(createError(401, "User not found!"));
//     }
//   } catch (error) {
//     next(error);
//   }
// };
