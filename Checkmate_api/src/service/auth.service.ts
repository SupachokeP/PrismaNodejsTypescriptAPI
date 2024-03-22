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
  const checkUsernameQuery = `select * from TB_Users WHERE UserId = @userId`;

  pool.input("userId", userId);

  const existUser = await pool.query(checkUsernameQuery);

  if (existUser.recordset.length > 0) {
    return existUser.recordset[0];
  }

  return null;
};
