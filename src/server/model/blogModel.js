const mongoose = require('mongoose')



const blogModel = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
    
},{timestamps:true})
module.exports = mongoose.model("blog",blogModel)