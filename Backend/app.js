import express from "express";
import cors from "cors";
import "dotenv/config";
import launchersR from "./routes/launchersR.js"
import deleteR from "./routes/deleteR.js"

import { dbConnect } from "./db/dbConect.js";


dbConnect()
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api", launchersR)
app.use("/api", deleteR)

app.listen(process.env.PORT, ()=>{
    console.log(`http://localhost:${process.env.PORT}`);
})