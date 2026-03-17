import { ObjectId } from "mongodb";
import { myDB } from "../db/dbConect.js";

const db = myDB    
const launchersTable =  db.collection("launchers")

export async function getaAllLaunchersC(req, res){
    try{
        const data = await launchersTable.find().toArray()
        return res.json(data)
    }catch(error){
        return res.status(500).json({message: "Error fetching data!"})
    }
    
}


export async function getLauncherByIdC(req, res){
    try{
       const id = req.params.id;
       const data = await launchersTable.findOne({_id: new ObjectId(id)})
       return res.json(data)
    }catch(error){
        return res.status(500).json({message: "No launcher found that matches this id!"})
    }
    
}


export async function addLauncherC(req, res){
    const {city, rocketType, latitude, longitude, name} = req.body    
    try{
        if(!city || !rocketType || !latitude || !longitude || !name){
            return res.json({message: "Missing mandatory errors!!"})
        }
        if(typeof latitude != "number" || typeof longitude != "number"){
            return res.json({message: "Fields were not entered correctly!"})
        } 
       await launchersTable.insertOne({city, rocketType, latitude, longitude, name})
       return res.json({message: "Launcher added successfully..."}) 
    }catch(error){
        return res.status(500).json({message: "The launcher is not saved!!"})
    }
}


export async function deleteByIdC(req, res){
    try{
        const id = req.params.id;
        const result = await launchersTable.deleteOne({_id: new ObjectId(id)})
        
        if(result.deletedCount == 0){
            return res.json({message: "No launcher found with this id!!"})
        }
        return res.json({message: "good"})
    }catch(error){
        return res.status(500).json({message: "Error fetching data!"})
    }
}