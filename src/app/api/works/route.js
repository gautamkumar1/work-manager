// import mongoose from "mongoose";
import { connectDb } from "@/helper/db";
import { Work } from "@/models/work";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { workerName, position, workHours, salary } = await request.json();

    if (!workerName || !position || !workHours || !salary) {
        return NextResponse.json({
            message: "All work fields are required",
            status: false,
        }, { status: 400 });
    }

    try {
        const work = new Work({
            workerName,
            position,
            workHours,
            salary,
        });
        const workCreated = await work.save();
        return NextResponse.json({
            message: "Work Created Successfully",
            status: true,
            data: workCreated,
        }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Work Creation Failed",
            status: false,
        }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const works = await Work.find();
        return NextResponse.json({
            message: "All works found",
            status: true,
            data: works,
        }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "All works found failed",
            status: false,
        }, { status: 500 });
    }
}
