import {v2 as cloudinary} from "cloudinary"
import fs from "fs";
//configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        const uploadResult = await cloudinary.uploader.upload(
            localFilePath,
            {resource_tye: "auto"}
        )
        console.log(`successfully uploaded on cloudinary at : ${uploadResult.url} `)
        fs.unlinkSync(localFilePath)
        return uploadResult
    }catch(err){
        console.log(`uploading failed on cloudinary`,err)
        fs.unlinkSync(localFilePath)
        return null
    }
}

export {uploadOnCloudinary}