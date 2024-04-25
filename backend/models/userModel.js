
const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    username:{
        type: String,
        required:true,
        unique:true
    },

    password:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },

    images:[String],

    
    createdAt:{
        type:Date,
        default: new Date(),
    },
    updateAt:{
        type:Date,
        deafault: new Date(),
    }
    
})
const userModel=mongoose.model('users',userSchema)
 
module.exports=userModel;