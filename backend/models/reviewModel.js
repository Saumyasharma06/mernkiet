const mongoose=require("mongoose");

const reviewSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    review:{
        type:Number,
        required:true,
    },
    description: String,

    images:[String],

    productId:{
        type:String,
    },

    createdAt:{
        type:Date,
        default: new Date(),
    },
    updateAt:{
        type:Date,
        deafault: new Date(),
    }
    
})
const reviewModel=mongoose.model('Reviews',reviewSchema)
