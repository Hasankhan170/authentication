import User from "@/models/userModel";
import dbConnect from "@/dbConnect/dbConnect";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { getDataFromToken } from "@/helpers/getDataFromToken";

dbConnect()


export async function POST(request : NextRequest){
   const userId = await getDataFromToken(request)
   const user = await User.findOne({_id : userId}).select("-password")
   if(!user){
       return NextResponse.json({
           error : "User not found"
       },{status : 400})
   }
   return NextResponse.json({
       message : "User fetched successfully",
       data : user
   })
}