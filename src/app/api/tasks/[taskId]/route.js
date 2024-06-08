import { connectDb } from "@/helper/db";
import { Task } from "@/models/task";
import { getResponseErrorMessage,getResponseSuccessMessage } from "@/helper/getResponse";
export async function GET(request,{params}){
    const {taskId} = params;
    try {
        const task = await Task.findById(taskId);
        return getResponseSuccessMessage("Single Task Data Find Successfully",true,task,201);
    } catch (error) {
        console.log(error);
        return getResponseErrorMessage("Error from finding task data",false,error,501)
    }
}

export async function DELETE(request,{params}){
    const {taskId} = params;
    try {
        await Task.deleteOne({_id:taskId})
        return getResponseSuccessMessage("Task delete successfully",true,null,201);
    } catch (error) {
        console.log(error);
        return getResponseErrorMessage("Error from deleting task task data",false,error,501)
    }
}

export async function PUT(request,{params}){
    const {taskId} = params;
    try {
        const {title,content,userId,addedDate,status} = await request.json();
        const task = await Task.findOneAndUpdate({_id:taskId}, {title,content,userId,addedDate,status},{new:true});
        return getResponseSuccessMessage("Task Update successfully",true,task,201);
    } catch (error) {
        console.log(error);
        return getResponseErrorMessage("Error from Updating task task data",false,error,501)
    }
}
