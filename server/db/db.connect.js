import mongoose from "mongoose";
export const ConnectDB=async()=>{
    await mongoose.connect(`mongodb+srv://venkatakalyan20000:${process.env.MONGO_URI_PASSWORD}@cluster0.qihp3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("connected to db")
};