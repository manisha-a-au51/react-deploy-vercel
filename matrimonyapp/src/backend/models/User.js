import mongoose from "mongoose";



const UserSchema= new mongoose.Schema({
   firstName:String,
   lastName:String,
    id:String,
    name:String,
    email: String,
    password: String,
     age: Number,
     caste:String,
     imageUrl:String,
    occupation: String
   //   imageData: { 
   //      data: String, 
   //      type: String 
   //   }
    

});

const User = mongoose.model("User",UserSchema)

export default User;