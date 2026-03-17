import express from "express"
import { login, me } from "../controlers/authcontroler.js"
import { authGlobal } from "../middlewares/auth.js"

const router = express.Router()


router.post("/login", login)
router.get("/getUser", authGlobal, me)



export default router