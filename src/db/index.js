import {DBNAME} from "../constants.js"
import mongoose from "mongoose"

const connectDB = async ()=>{
   try{ 
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DBNAME}`)
        console.log(`The MongoDB is connected at ${connectionInstance}`)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
export {connectDB}