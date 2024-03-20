// import User   from "../models/UserModel";
import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import { sqlConnection, sqlTransaction } from "../utils/db";
import { UserModel } from "../model/UserModel";
import { register, findUserByUserId } from "../service/auth.service";
import { generateToken } from "../utils/token";
import { createError } from "../middleware/error";
import { validationResult } from "express-validator";
export const signupController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const sql = await sqlConnection();
    const pool = sql.request();
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = new UserModel(
      req.body.userID, // userID
      req.body.email, // email
      req.body.phone, // phone
      hash, // passWord
      req.body.firstName, // firstName
      req.body.lastName // lastName
    );
    const existsUnits = await register(newUser, pool);

    return res.status(200).json({
      success: true,
      message: "Success",
      data: existsUnits,
    });
  } catch (error: any) {
    next(error);
  }
};
export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sql = await sqlConnection();
    const pool = sql.request();
    const { UserId, Password: requestPassword } = req.body;
    const userData = await findUserByUserId(UserId, pool);
    if (userData != null) {
      const token = await generateToken(userData, requestPassword);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ message: "Login successful", token: token });
    } else {
      next(createError(401, "User not found!"));
    }
  } catch (error) {
    next(error);
  }
};
