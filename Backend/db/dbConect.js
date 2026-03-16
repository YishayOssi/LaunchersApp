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

export const myDB = client.db("IDF")