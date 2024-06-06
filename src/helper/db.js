import mongoose from "mongoose"
import {User} from "../models/user" 
export const connectDb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to db....")
        // const user = new User({
        //     name:"gautam",
        //     email:"gautam@gmail.com",
        //     password:"123456"
        // })

        // await user.save()
        // console.log("User is Created");
    } catch (error) {
        console.log("Failed to connect to db");
        console.log(error);
    }
}