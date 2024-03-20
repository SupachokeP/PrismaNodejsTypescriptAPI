import dotenv from "dotenv";
import cookiepaser from "cookie-parser";
import express, { NextFunction, Request, Response } from "express";
import authRoute from "./src/routes/authRoutes";
import userRoute from "./src/routes/userRoutes";

const app = express();
dotenv.config();
app.use(cookiepaser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

export { app };
