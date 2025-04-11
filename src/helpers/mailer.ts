import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
interface EmailType {
  email: string;
  emailType: "VERIFY" | "RESET";
  userId: string;
}

export const sendEmail = async ({ email, emailType, userId }: EmailType) => {
  try {
    const hashToken = await bcryptjs.hash(userId.toString(), 10);
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set : {
        verifyToken: hashToken,
        verifyTokenExpiry: Date.now() + 3600000
        }
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set : {
        forgotPasswordToken: hashToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000
        }
      });
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "f2eb5fbd6946af",
        pass: "e37da786784584",
      },
    });

    const mailOptions = {
      from: "hasankhanali0316@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href= "${process.env.DOMAIN}/verifyemail?token=${hashToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      } or copy and paste the link below.
      <br>
      ${process.env.DOMAIN}/verifyemail?token=${hashToken}
      </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
