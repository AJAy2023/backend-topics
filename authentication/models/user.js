const mongoose  = require('mongoose');
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config({path:(__dirname, "../.env")});

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
});


module.exports = mongoose.model("User", userSchema);


