// import User   from "../models/UserModel";
import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import { sqlConnection, sqlTransaction } from "../utils/db";
import { UserModel } from "../model/UserModel";
import { register, findUserByUserId, findUserByEmail, insertOTP } from "../service/auth.service";
import { generateToken } from "../utils/token";
import { createError } from "../middleware/error";
import { validationResult } from "express-validator";
import otpGenerator from 'otp-generator';
import { OTPModel } from "../model/OTPModel";
import { mailSender } from "../utils/MailSender";
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
export const sendotp = async (
  req: Request,
  res: Response,
  next: NextFunction) => {
	try {
    const sql = await sqlConnection();
    const pool = sql.request();
		const { email } = req.body;
    
		// Check if user is already present
		// Find user with provided email
    const checkUserPresent = await findUserByEmail(email, pool);
		// to be used in case of signup

		// If user found with provided email
		if (checkUserPresent) {
			// Return 401 Unauthorized status code with error message
			return res.status(401).json({
				success: false,
				message: `User is Already Registered`,
			});
		}

		var otp = otpGenerator.generate(6, {
			upperCaseAlphabets: false,
			lowerCaseAlphabets: false,
			specialChars: false,
		});
    const otpModel = new OTPModel(
      email, // userID
      otp, // email
    );
		const result = await insertOTP(otpModel,pool);
		console.log("Result is Generate OTP Func");
		console.log("OTP", otp);
		console.log("Result", result);
		const otpPayload = { email, otp };
		const otpBody = await mailSender(email, otp);
		res.status(200).json({
			success: true,
			message: `OTP Sent Successfully`,
			otp,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({ success: false, error: error });
	}
};