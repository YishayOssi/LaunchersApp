import express from "express"
import { deleteByIdC } from "../controlers/LaunchersControlers.js"

const router = express.Router()

router.delete("/launchers/:id", deleteByIdC)

export default router