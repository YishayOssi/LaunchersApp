import { ObjectId } from "mongodb";
import { myDB } from "../db/dbConect.js";

const db = myDB
const userTable = db.collection("users")




export async function createUser(req, res){
    try{
        const {username, password, email, user_type} = req.body
        if(!username || !password || !email || !user_type) return res.status(400).json({message: "Missing mandatory errors!"})
        const checkUserTypeInDb = await userTable.findOne({user_type: user_type})
        if(checkUserTypeInDb)  return res.status(200).json({message: "There is already an existing user of this type!"})
        const newUser = await userTable.insertOne({username, password, email, user_type})
        return res.json({message: `User ${username} created successfully...`})
    }catch(error){
        return res.status(500).json({message: "Server-side error creating user!"})
    }
}

export async function deleteUser(req, res){
    try{
        const id = req.params.id;  
        console.log(id);
              
        const result = await userTable.deleteOne({_id: new ObjectId(id)})
        console.log(result);
        
        if(result.deletedCount == 0){
            return res.json({message: "No user with this id was found!"})
        }
        return res.json({message: "User deleted successfully..."})

    }catch(error){
        return res.status(500).json({message: "Server-side error deleting user!"})
    }
}

export async function updateUser(req, res){
    try{

    }catch(error){
        
    }
}

  