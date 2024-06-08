import { connectDb } from "@/helper/db";
import { Work } from "@/models/work";
import { NextResponse } from "next/server";
export async function GET(request,{params}){
    const {workerId} = params;
    try {
        const getWork = await Work.findById(workerId);
        return NextResponse.json({
            "message": "Work Get Successfully",
            status: true,
            data: getWork,
        })
    } catch (error) {
        return NextResponse.json({
            "message":"Failed to get work data",
            status: false,
        })
    }
}
export async function DELETE(request,{params}){
    const {workerId} = params;
    try {
        await Work.deleteOne({_id:workerId});
        return NextResponse.json({
            "message": "Work delete Successfully",
            status: true,
        })
    } catch (error) {
        return NextResponse.json({
            "message":"Failed to delete work data",
            status: false,
        })
    }
}

export async function PUT(request,{params}){
    const {workerId} = params;
    try {
        await Work.updateOne({_id:workerId},request.body);
        return NextResponse.json({
            "message": "Work update Successfully",
            status: true,
        })
    } catch (error) {
        return NextResponse.json({
            "message":"Failed to update work data",
            status: false,
        })
    }
}