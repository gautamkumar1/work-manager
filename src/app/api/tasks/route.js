import { connectDb } from "@/helper/db";
import { Task } from "@/models/task";
import { getResponseErrorMessage,getResponseSuccessMessage } from "@/helper/getResponse";

export async function GET(request) {
    try {
        const taskData = await Task.find();
        return getResponseSuccessMessage("All Task Founded",true,taskData,200);
    } catch (error) {
        return getResponseErrorMessage("Task Not Found",false,error,501);
    }
}

export async function POST(request) {
    const {title,content,userId} = await request.json();
    if(!title ||!content ||!userId){
        return getResponseErrorMessage("All fields are required",false,null,501);
    }
    try {
        const task = await new Task({
            title,content,userId
        })
        const taskCreated = await task.save();
        return getResponseSuccessMessage("Task Created Successfully",true,taskCreated,201);
    } catch (error) {
        console.log(error);
        return getResponseErrorMessage("Task Created Failed",false,error,501);
    }
}