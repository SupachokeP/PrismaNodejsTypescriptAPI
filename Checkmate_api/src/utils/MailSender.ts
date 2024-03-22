import nodemailer from 'nodemailer';
export const mailSender = async (email : string, otp: string) => {
  try {
    // Create a Transporter to send emails
    console.log("user :" +process.env.MAIL_USER)
    console.log("pass :" +process.env.MAIL_PASS)
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      }
    });
    // Send emails to users
    let info = await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: 'OTP Verification',
      text: `Your OTP for verification is ${otp}`,
    });
    console.log("Email info: ", info);
    return info;
  } catch (error) {
    console.log(error);
  }
};