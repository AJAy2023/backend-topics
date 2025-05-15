
const jwt =  require("jsonwebtoken");
const verifyToken = (req, res, next)=>{
    const aouthHeader = req.aouthHeader.authorization;
    if(!aouthHeader || aouthHeader.startsWith("Bearer"))
    {
        return res.status(401).json({
            mag:"server  failed to verify...."
        });
    }
    const  token  = aouthHeader.split("")[1];

    try{
        const decoded = jwt.verify(token ,  process.env.ST_KEY)
        req.userId = decoded.userId;
        next()
    }catch (err) {
    console.error("Token verification failed:", err);
    res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = verifyToken;


