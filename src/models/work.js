import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    workerName:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true,
        
    },
    workHours:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    }
})

export const Work = mongoose.models.works || mongoose.model("works",userSchema);