const express =  require("express");
const router = express.Router();
const User = require("./user");
const user = require("./user");

router.get("/users", async  (req, res)=>{
try{

    const users = await User.find();
   
    if(!users)
    {
        return res.status(400).json({
            msg:"user not found"
        });
    }
    res.status(200).json(user);
}catch(error)
{
        res.status(500).json({
            msg:"server error", error:" error.message"
        });
}
});


module.exports=router;
