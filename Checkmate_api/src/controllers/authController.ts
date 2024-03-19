
import bcrypt from "bcrypt";
// import User   from "../models/UserModel";
import { NextFunction, Request, Response } from 'express'
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { db } from "../utils/db";
dotenv.config();
export const signup = async (
    req:Request, 
    res:Response, 
    next:NextFunction) => {
    try {

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.Password, salt);
      const newUser = await db.tB_Users.create(
        {
            data: {
                Email: req.body.Email,
                UserID: req.body.UserId,
                Password:hash,
                Phone:req.body.Phone,
                FirstName:req.body.FirstName,
                LastName:req.body.LastName,
            }
            
        }
      );
    //   console.log(newUser);
      res.status(201).send('User Created');
    } catch (error) {
      next(error);
    }
  };
  export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { UserId, Password } = req.body;
      console.log(UserId)
      console.log(Password)
      const user = await db.tB_Users.findFirst({ where: { UserID : UserId } });
     console.log(user)
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
  
      const isValidPassword = await bcrypt.compare(Password, user.Password);
      
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user.UserID }, '1234', { expiresIn: '1h' });
  
      res.cookie("access_token", token, {
        httpOnly: true,
      }).status(200).json({ message: 'Login successful', token });
    } catch (error) {
      next(error);
    }
  };
