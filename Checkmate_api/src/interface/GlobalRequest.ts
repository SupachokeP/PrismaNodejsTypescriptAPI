import { Request } from "express";
import { UserModel } from "../model/UserModel";

declare global {
  namespace Express {
    interface Request {
      user?: UserModel; // Change 'any' to the type of your user object if possible
    }
  }
}
export interface CustomRequestUser extends Request {
  user?: UserModel; // Make 'user' optional to handle cases where token might not be present
}
