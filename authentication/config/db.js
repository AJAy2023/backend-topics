const mongoose = require("mongoose");

// const connectdb = new mongoose.connect('mongodb://127.0.0.1:27017/auth')
const connectDB = async()=>{
    try{
       await  mongoose.connect('mongodb://127.0.0.1:27017/auth');
       console.log("mongodb is conntected ....");
    }
    catch(err)
    {
        console.log("mongo error " + err);
    }
};
module.exports=connectDB;