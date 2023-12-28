const mongoose = require("mongoose");


const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:50,
    },
    body:{
        type:String,
        required:true,
        maxLength:50,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"like",
    }],
    comment: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment",
    }]

});

module.exports=mongoose.model("Post",postSchema);