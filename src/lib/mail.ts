import nodemailer from "nodemailer";

const Code = () => {
  let code = "";
  const length = 6;
  const characters = "0123456789";
  for (let i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
};

export const sendMail = async (email: string) => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER as string,
      pass: process.env.EMAIL_PASS as string,
    },
  });

  const code = Code();

  const mailOptions = {
    from: "founder@eshway.com",
    to: `${email}`,
    subject: "OTP Verification",
    text: `
      Your verification code is ${code}`,
  };

  try {
    await transport.sendMail(mailOptions);
    return code;
  } catch (error) {
    console.log(error);
  }
};
