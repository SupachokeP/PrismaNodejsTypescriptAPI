// validators.ts

import { body, ValidationChain } from "express-validator";

export const signupValidation: ValidationChain[] = [
  body("userID").notEmpty().withMessage("User ID is required"),
  body("email").isEmail().withMessage("Invalid email address"),
  body("phone")
    .isLength({ max: 10 })
    .withMessage("Phone number must be 10 characters"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("firstName").notEmpty().withMessage("First name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
];
