const mongoose=require("mongoose");
const { stripVTControlCharacters } = require("util");

const productSchema=mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    description: String,

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
const productModel=mongoose.model('Products',productSchema);

module.exports=productModel;