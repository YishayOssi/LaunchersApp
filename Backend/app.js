import express from "express";
import cors from "cors";
import "dotenv/config";
import launchersR from "./routes/launchersR.js"
import deleteR from "./routes/deleteR.js"
import authR from "./routes/auto.route.js"
import adminR from "./routes/admin.route.js"
import { createAdmin, dbConnect } from "./db/dbConect.js";


dbConnect()
createAdmin()
const app = express()
app.use(cors())
app.use(express.json())

// middleware
app.use("/", (req, res, next) => {
  console.log(req.method, req.url)
  next()
})

app.use("/api", launchersR)
app.use("/api", deleteR)
app.use("/api/auth", authR)
app.use("/api/auth/register", adminR)

app.listen(process.env.PORT, ()=>{
    console.log(`http://localhost:${process.env.PORT}`);
})