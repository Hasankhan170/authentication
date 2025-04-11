import dbConnect from "@/dbConnect/dbConnect";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";

dbConnect();

export async function POST(request : NextRequest){
    try {
        const reqBody = await request.json();
        const {token} = reqBody;

        const user = await User.findOne({verifyToken : token,verifyTokenExpiry : {$gt : Date.now()}});
        if(!user){
            return NextResponse.json({
                error : "Invalid token",

            },{status : 400})

        }

        user.isverified = true
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;

        await user.save()

        return NextResponse.json({
            message : "Email verified successfully",
            success : true
        },{status : 200})
        
    } catch (error :any) {
        return NextResponse.json({
           error : error.message
        },{status : 500})
    }
}