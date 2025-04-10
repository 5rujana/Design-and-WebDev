import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();
/*
-> cross origin resource sharing
-> configure json 
-> configure urls
-> congigure local storage
-> configured cookie - parser
 */

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({
    limit:"16kb"
}))

app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))

app.use(express.static("public"))

app.use(cookieParser())

import userRouter from "./routes/user.router.js"
app.use("/users",userRouter) // http

export {app}