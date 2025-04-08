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

// functions for password mastching
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordMatched = async function(){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id:this._id,
            username : this.username,
            email : this.email,
            name: this.name
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCES_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: PerformanceObserverEntryList.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const User = mongoose.Aggregatemodel("User",userSchema)