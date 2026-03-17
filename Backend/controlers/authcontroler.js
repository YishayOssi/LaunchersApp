import jwt from "jsonwebtoken"
import { myDB } from "../db/dbConect.js";
const db = myDB
const userTable = db.collection("users")


export async function login(req, res) {
    try {
        const { username, password } = req.body
        const user = await userTable.findOne({ username: username })
        if (!user) return res.json({ message: "User not found in the system!" })
        const checkPassword = await userTable.findOne({ password: password, username: username })
        if (!checkPassword) return res.json({ message: "The password is incorrect!" })
        const newToken = jwt.sign({ username: username, user_type: user.user_type }, process.env.JWT_SECRET, { expiresIn: "1d" })
        user.last_login = new Date();
        await userTable.updateOne({ username: username }, { $set: { last_login: user.last_login } })
        return res.json({"token":newToken})
    } catch (error) {
        res.status(500).json({ message: "Server error during authentication!!" })
    }
}


export async function me(req, res) {
    try {
        const username = req.user.username
        const user = await userTable.findOne({ username: username }, { projection: { password: 0 } })
        if (!user) return res.json({ message: "Token verification succeeded but user not found!" })
        return res.json({ user: user })
    } catch (error) {
        res.status(500).json({ message: "Server error during authentication!!" })
    }
}