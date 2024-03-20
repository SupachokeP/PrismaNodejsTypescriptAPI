import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { createError } from "./error";
import { CustomRequestUser } from "../interface/GlobalRequest";

export const verifyToken = (
  req: CustomRequestUser, // Use the extended Request type
  res: Response,
  next: NextFunction
) => {
  // Get token from headers (adjust based on your implementation)
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    jwt.verify(token, process.env.JWT!, (err: any, user: any) => {
      if (err) return next(createError(403, "Token is not valid!"));
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
