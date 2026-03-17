import express from "express"
import { addLauncherC, getaAllLaunchersC, getLauncherByIdC } from "../controlers/LaunchersControlers.js"
import { air, authGlobal, intelligence } from "../middlewares/auth.js"

const router = express.Router()

router.get("/launchers", authGlobal, air, getaAllLaunchersC)
router.get("/launchers/:id", authGlobal, air, getLauncherByIdC)
router.post("/launchers",  authGlobal, intelligence, addLauncherC)

export default router