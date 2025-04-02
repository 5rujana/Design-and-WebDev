import mongoose, {Schema} from "mongoose"
const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        lowercase:true,
        trim:true,
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require: true,
        unique: true,
        lowercase:true,
        trim:true,
    },
    profileImage:{
        type: String,
        require:true,
    },
    password:{
        type:String,
        require:[true,"password is required"],
        trim:true,
    },
    refreshToken:{
        type:String,
        unique:true,
    }
},{
    timestamps:true
})

export const User = mongoose.Aggregatemodel("User",userSchema)