import { NextResponse } from "next/server";

export async function POST(request){
    // console.log(request.body); // Get the of the body contents.
    // console.log(request.headers); // get the headers of the request
    // console.log(request.method); // get the method of the request
    // console.log(request.cookies); // get the cookies of the request
    // console.log(request.url); // Contains the URL of the request.
    // const jsonData = await request.json() // Returns a promise that resolves with the result of parsing the request body as JSON.
    // console.log(jsonData);
    // console.log(request.nextUrl.pathname);
    // console.log(request.nextUrl.searchParams); // / Given a request to /home?name=Gautam, searchParams is { 'name': 'Gautam' }
    return NextResponse.json({
        "message":"Data received Successfully"
    })
}