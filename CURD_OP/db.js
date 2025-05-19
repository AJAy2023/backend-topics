const mongoose =  require("mongoose");

const connectDB =  async ()=>{
    try{
         await mongoose.connect('mongodb://127.0.0.1:27017/curd', 
            console.log("mongodb is connected ...")
         );
    }catch(e)
    {
        console.log("something went wrong", e.message);
    }
}

module.exports=connectDB;