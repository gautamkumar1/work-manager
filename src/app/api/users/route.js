import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
connectDb()
export async function GET(request) {
  try{
    const users = await User.find().select("-password");
    return NextResponse.json({
      "message":"All users found successfully",
      "data": users,
      status:true,
    })
  }
  catch(error){
    console.log(error);
    return NextResponse.json({
      "message":"All users found failed",
      status:false,
    },{
      status:501,
    })
  }
}

// Post Function
export async function POST(request) {
  const {name,email,password} = await request.json();
  if(!name || !email || !password){
    return NextResponse.json({
      status: false,
      message: "All fields are required",
    });
  }
  try {
    const user =  new User({
      name,
      email,
      password,
    })
    const userCreated = await user.save();
    return NextResponse.json({
      status: true,
      message: "User created successfully",
      data: userCreated,
    },{
      status: 201,
    });

  } catch (error) {
    console.log(error);
    return NextResponse.json({
      "message":"User Created Failed",
      status:false,
    },{
      status:501,
    })
  }
}

