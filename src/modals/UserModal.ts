import { model, models, Schema } from "mongoose";

const UserSchema=new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String,
    },
    googleId:{
        type:String
    }
})

const User = models?.User || model("User",UserSchema)
export default User