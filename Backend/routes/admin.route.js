import express from "express"
import { adminAuth, authGlobal } from "../middlewares/auth.js"
import { createUser, deleteUser, updateUser } from "../controlers/adminControler.js"

const router = express.Router()

router.post("/create", authGlobal, adminAuth, createUser)
router.delete("/delete/:id", authGlobal, adminAuth, deleteUser)
router.put("/update", authGlobal, adminAuth, updateUser)


export default router