import dbConnect from "@/dbConnect/dbConnect";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

dbConnect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const saveUser = await newUser.save();

    await sendEmail({
      email,
      emailType: "VERIFY",
      userId: saveUser._id,
    });

    return NextResponse.json({
      message: "user created successfully, please check your email to verify",
      success: true,
      saveUser,
    },{status : 201});

    
  } catch (error) {
    return NextResponse.json(
      {
        message: "something went wrong",
        error,
      },
      { status: 500 }
    );
  }
}
