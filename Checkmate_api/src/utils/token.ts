import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const generateToken = async (userData: any, requestPassword: string) => {
  const { UserID, Password: hashPassword } = userData; //userdata = ข้อมูลจาก db
  const isCorrect = await bcrypt.compare(requestPassword, hashPassword); //เทียบ password
  if (!isCorrect) return null;

  console.log(UserID);
  const token = jwt.sign({ userId: UserID }, process.env.JWT as string);

  if (token.length > 0) {
    return token;
  }

  return null;
};
