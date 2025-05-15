// basic structure  of login  form and  jwt tokens
const User =  require("../models/user");
const  loginwith  = (req, res)=>{
    const {username, email } = req.body;
    try
    {
        const existing = User.findOne({email});
        if(!existing)
        {
            return res.status(400).json({
                mag:"user not found"
            });
        }
     const User  ={username, email}
     User.save();
    }catch(err)
    {
        console.log("external error " , err);
    }
}

module.exports = loginwith;


