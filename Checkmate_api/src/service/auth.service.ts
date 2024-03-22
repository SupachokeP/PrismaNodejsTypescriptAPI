import { OTPModel } from "../model/OTPModel";
import { body } from "express-validator";
import bcrypt from "bcrypt";
import { UserModel } from "../model/UserModel";
import { Request } from "mssql";
import { Response } from "express";
import { error } from "node:console";
function createResponse(
  res: Response,
  statusCode: number,
  success: boolean,
  message: string,
  data: any
) {
  return res.status(statusCode).json({
    success: success,
    message: message,
    data: data,
  });
}

export async function register(req: UserModel, pool: any) {
  // Added 'res' parameter
  const { userId, email, password, phone, firstName, lastName } = req; // Assuming request body is used

  const hash = bcrypt.hashSync(password, 10);
  pool.input("userId", userId);
  pool.input("email", email);
  pool.input("password", hash);
  pool.input("phone", phone);
  pool.input("firstName", firstName);
  pool.input("lastName", lastName);

  try {
    const result = await pool.query(`
      INSERT INTO [dbo].[TB_Users]
             ([UserID]
             ,[Email]
             ,[Password]
             ,[Phone]
             ,[FirstName]
             ,[LastName]
             ,[DateCreated])
       VALUES
             (@userId
             ,@email
             ,@password
             ,@phone
             ,@firstName
             ,@lastName
             ,GETDATE())
    `);
    pool.parameters = {};
    const userPayload = {
      userId: userId,
      email: email,
      name: firstName + " " + lastName, // Fixed concatenation
    };

    if (result.rowsAffected[0] === 0) {
      console.log("Insertion failed: No rows were affected.");
      throw error; // Changed status code to 400 for failure
    } else {
      console.log("Insertion successful!");
      return userPayload;
    }
  } catch (error) {
    console.log("Error occurred during insertion:", error);
    return error; // Changed status code to 500 for server error
  }
}
export const findUserByUserId = async (userId: string, pool: Request) => {
  const checkUsernameQuery = `select * from TB_Users WHERE UserID = @userId`;

  pool.input("userId", userId);

  const existUser = await pool.query(checkUsernameQuery);

  if (existUser.recordset.length > 0) {
    return existUser.recordset[0];
  }

  return null;
};
export const findUserByEmail = async (Email: string, pool: Request) => {
  const checkUsernameQuery = `select * from TB_Users WHERE Email = @Email`;

  pool.input("Email", Email);

  const existUser = await pool.query(checkUsernameQuery);

  if (existUser.recordset.length > 0) {
    return existUser.recordset[0];
  }
  return null;
};
export const insertOTP = async (req: OTPModel, pool: Request) => {
  const { email, otp } = req;
  pool.input("otp", otp);

  try {
    const result = await pool.query(`
    INSERT INTO [dbo].[TB_otp]
        ([Email]
        ,[otp]
        ,[Expire]
        ,[DateCreated])
    VALUES
        (@email
        ,@otp
        ,DATEADD(MINUTE, 5, GETDATE())
        ,GETDATE())
        `);
    let response;
    if (result.rowsAffected[0] === 0) {
      console.log("Insertion failed: No rows were affected.");
      response = null;
      // Handle failure appropriately, like throwing an error or returning a specific response
    } else {
      console.log("Insertion successful!");
      response = "Insertion successful!";
      // Handle success appropriately
    }
    return response;
  } catch (error) {
    console.log("Error occurred during insertion:", error);
    return error;
  }
};
