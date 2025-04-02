import {app} from "./app.js"
import { connectDB } from "./db/index.js"
import dotenv from "dotenv"
dotenv.config({
    path:"./env"
})

connectDB()
.then( ()=>{
    app.listen(process.env.PORT || 8090, ()=>{
        console.log(`Server is successfully running at ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Connection failed" , err)
})