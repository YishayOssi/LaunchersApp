import express from "express"
import { deleteByIdC } from "../controlers/LaunchersControlers.js"
import { authGlobal, intelligence } from "../middlewares/auth.js"

const router = express.Router()

router.delete("/launchers/:id", authGlobal, intelligence, deleteByIdC)

export default router