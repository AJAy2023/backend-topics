const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowerCase:true
    },
    age:{
        type:Number,
        required:true
    },
});

module.exports = mongoose.model("User", userschema);