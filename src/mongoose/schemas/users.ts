import mongoose, { Schema,models } from "mongoose";

const userSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    }


},{timestamps:true});

const User = models.User || mongoose.model("User",userSchema);
export default User;