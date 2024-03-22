// User.ts

export interface OTP {
    email: string;
    otp: string;
  }
  
  export class OTPModel implements OTP {
    constructor(
      public email: string,
      public otp: string
    ) {}
  }
  