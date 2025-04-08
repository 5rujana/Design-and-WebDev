import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken"
import {User} from "../models/user.models.js"

export const verifyJWT = asyncHandler(async(req,resizeBy,next) =>{
    try{
        const token = req.cookies?.accessToken || req.headers("Authorization")?.replace("Bearer","")
        if(!token){
            throw new ApiError(1,"Unauthorised request")
        }
        const dedcoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(dedcoded._id).select("-password -refreshToken")
        if(!user){
            throw new ApiError("Invalid Access Token")
        }
        req.user = user
        next()
    }catch(err){
        throw new ApiError( err?.message || "Unauthorized request")
    }
})
