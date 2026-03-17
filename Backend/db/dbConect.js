import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGO_URL)
let db 


export async function dbConnect(){
    try{
       await client.connect()
       db = client.db("IDF")
       console.log("connect to db...");
    }catch(error){
        console.log("Connection to db failed!");
    }
}


export async function createAdmin(){
    try{
       const db = client.db("IDF")
       const userTable = db.collection("users")
       const admin = await userTable.findOne({user_type: "admin"})
       if(!admin){
        userTable.insertOne({
            username: "yishay",
            password: "smart",
            email: "yishay@gmail.com",
            user_type: "admin",
            last_login: null
        })
        console.log("Create new Admin...");
       }
       }catch(error){
        console.log("Administrator creation failed!");
       }
}



export const myDB = client.db("IDF")