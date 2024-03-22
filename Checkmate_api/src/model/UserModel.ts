// User.ts

export interface User {
  userId: string;
  email: string;
  phone: string;
  password: string; // Use password instead of passWord for better naming convention
  firstName: string;
  lastName: string;
}

export class UserModel implements User {
  constructor(
    public userId: string,
    public email: string,
    public phone: string,
    public password: string,
    public firstName: string,
    public lastName: string
  ) {}
}
