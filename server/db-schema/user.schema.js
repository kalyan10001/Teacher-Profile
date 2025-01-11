import mongoose from "mongoose";

const user=new mongoose.Schema({
    id:{
        type:String,
    },
    name:{
        type:String,
        required:true
    },
    Subject:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
    },
    profilepicture:{
        type:String,
    },
    bio:{
        type:String,
    },
    experience:{
        type:String
    },
    classeshandled:{
        type:[String]
    }
});

export const User=mongoose.model("User",user);