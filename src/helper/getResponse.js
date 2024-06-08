import { NextResponse } from "next/server";
export const getResponseSuccessMessage = (message,success,Responsedata,statusCode) =>{
    return NextResponse.json({
        "message":message,
        success:success,
        data:Responsedata,
    },{
        status:statusCode,
    })
}

export const getResponseErrorMessage = (message,success,error,statusCode) =>{
    
    return NextResponse.json({
        "message":message,
        success:success,
        status:statusCode,
        error:error,
    },{
        status:statusCode,
    })
}