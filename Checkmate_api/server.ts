import dotenv from "dotenv";
import cookiepaser from "cookie-parser";
import express,{ NextFunction, Request, Response } from 'express'
import authRoute from "./src/routes/authRoutes";

const app= express()
dotenv.config();
app.use(cookiepaser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use((err : any, 
        req : Request,
        res :Response, 
        next:NextFunction) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});


app.listen(8800, () => {
    console.log(`App is listening on port ${8800}!`);
});