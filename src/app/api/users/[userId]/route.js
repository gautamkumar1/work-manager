import { NextResponse } from "next/server";
import { User } from "@/models/user";
// Get Single User
export async function GET(request,{params}){
    const {userId} = params;
    try{
        const user = await User.findOne({_id:userId});
        return NextResponse.json({
            "message": "User Get Successfully",
            status: true,
            data: user,
        })
    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            "message":"Failed to get user data",
            status: false,
        })
    }
}

// Delete a user
export async function DELETE (request,{params}){
    const {userId} = params;
    try{
        await User.deleteOne({_id:userId});
        return NextResponse.json({
            "message": "User delete Successfully",
            status: true,
            
        })
    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            "message":"Failed to delete user data",
            status: false,
        })
    }
}
// Update user
export async function PUT(request,{params}){
    const {userId} = params;
    const {name,email,password} = await request.json();
    try{
        const user = await User.findOneAndUpdate({_id:userId},{name,email,password},{new:true});
        return NextResponse.json({
            "message": "User Update Successfully",
            status: true,
            data: user,
        })
    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            "message":"Failed to update user data",
            status: false,
        })
    }
}