import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"

const generateAccessandRefreshTokens = async (userId) =>{
    try{
        const user = await User.findbyId(userId)
        if(!user){
            throw new ApiError(0,"User is not Found")
        }
        const accessToken = User.generateAccessToken();
        const refreshToken = User.generateRefreshToken();
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})
        return {accessToken,refreshToken}
    }catch(err){
        console.log('Error in generateAccessandRefreshToken',err)
        console.log("stack Trace", err.stack)
        if(err instanceof ApiError){
            throw err
        }else{
            throw new ApiError(500,"An error occured while generating access and refresh Tokens")
        }
    }
}

const registerUser = asyncHandler(async(req, res) =>{
    const {name,username,email,password} = req.body
    if([name,username,email,password].some((feild)=> feild?.trim()==="")){
        throw new ApiError(400,"All the feilds are required")
    }
    const existingUser = await User.findOne({
        $or:[{username,email}]
    })
    if(existingUser){
        throw new ApiError(409, "The user already exists")
    }

    const profileimageLocalPath = req.files?.profileImage[0]?.profileimageLocalPath
    if(!profileimageLocalPath){
        throw new ApiError(400,"Profile Image is required")
    }
    const profileImage = await uploadOnCloudinary(profileimageLocalPath)
    if(!profileImage){
        throw new ApiError(500,"Failed to upload to cloudinary")
    }
    const user = await User.create({
        username,
        name,
        email,
        profileImage: profileImage.url,
        password
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new ApiError(501, "Failed to register the user")
    }
    return res.status(201).json( 
        new ApiResponse(201, createdUser,"User is registered successfully")
    )
})

const loginUser = asyncHandler(async (req,res)=>{
    const {username, email,password} = req.body
    if(!username && !email){
        throw new ApiError(404, "we require username and email")
    }
    const user = await User.findOne({
        $or:[{username},{email}]
    })
    if(!user){
       throw new ApiError(404,"User is not found")
    }

    const isPasswordCorrect = await user.isPasswordMatched(password)
    if(!isPasswordCorrect){
        throw new ApiError(401,"Invalid user credentials")
    }
    const {accessToken,refreshToken} = await generateAccessandRefreshTokens(user._id)
    const loggedInUser = await User.findBy(user.Id).select(
        "-password -refreshToken"
    )
    const options ={
        httpOnly: true,
        secure: true
    }
    return res.status(201)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200,
            {
                user:loggedInUser,accessToken,refreshToken
            },
            "User loggedIn successfully"
        )
    )
})

const logoutUser = asyncHandler(async (req,res) =>{
    await User.findByIdandUpdate(
        req.user._id,
        {
            $unset:{
                refreshToken: 1
            }
        },{
            new: true
        }
    )
    const options = {
        httpsOnly:true,
        secure:true
    }
    return res.status(200)
    .clearcookie("accessToken",options)
    .clearcookie("refreshToken",options)
    .json(
        new ApiResponse(200, {}, "User loggedout successfully")
    )
})

const refreshAccessToken = asyncHndler( async(req,res)=>{
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
    if(!incomingRefreshToken){
        throw new ApiError(401,"Uauthorized request")
    }
    try{
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
        const user = await User.findBy(decodedToken._id)
        if(!user){
            throw new ApiError(401,"Invalid refreshToken")
        }
        if(user?.refreshAccessToken !== incomingRefreshToken){
            throw new ApiError(401,"Refresh Token is expired")
        }
        const options = {
            httpOnly:true,
            secure:true
        }
        const {accessToken,newrefreshToken} = await generateAccessandRefreshTokens(user._id)
        return req.status(200)
        .cookie("accessToken",accessToken,options)
        .cookie("refreshToken",newrefreshToken,options)
        .json(
            new ApiResponse(200,{accessToken,newrefreshToken},"Access Token is refreshed")
        )
    }catch(err){
        throw new ApiError(401,err?.message || "Invalid refresh Token")
    }
})

const changeCurrentPassword = asyncHandler(async(req,res) =>{
    const {oldPassword,newPassword} = req.body
    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordMatched(oldPassword)
    if(!isPasswordCorrect){
        throw new ApiError(402, "passwords doesnt match")
    }
    if(oldPassword === newPassword){
        throw new ApiError(402, " same passwords ")
    }
    user.password = newPassword
    await user.save({ validateBeforeSave: false})

    return res.status(200)
    .json(new ApiResponse(200,{},"Password is changed"))
})

export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword
}