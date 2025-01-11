import express from "express";
import cors from "cors";
const app=express();
import dotenv from "dotenv";
import { ConnectDB } from "./db/db.connect.js";

import router from "./routes/user.routes.js";
dotenv.config();
app.use(cors());
const PORT=process.env.PORT || 3000

app.use("/api/users",router);
app.listen(PORT,()=>{
    console.log(`port running on ${PORT}`);
    ConnectDB();
})