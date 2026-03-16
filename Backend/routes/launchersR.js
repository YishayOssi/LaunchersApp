import express from "express"
import { addLauncherC, getaAllLaunchersC, getLauncherByIdC } from "../controlers/LaunchersControlers.js"

const router = express.Router()

router.get("/launchers", getaAllLaunchersC)
router.get("/launchers/:id", getLauncherByIdC)
router.post("/launchers", addLauncherC)

export default router