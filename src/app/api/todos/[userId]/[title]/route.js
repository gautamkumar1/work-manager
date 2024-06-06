import { NextResponse } from "next/server";

export function GET(request,{params}){
    const {userId,title} = params;
    console.log(`User id is ${userId}, title is ${title}`);
    return NextResponse.json({
        "message":"User Id and Title is Successful Get",
        status: true,
    })
}