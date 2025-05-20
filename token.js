const jwt =  require("jsonwebtoken");
const SECRET_KEY = 's23';

// function to create the token 

const  tokengen = (userid)=>{
    return jwt.sign({userid}, SECRET_KEY, {'expiresIn':'1d'});
}

const toekn = tokengen("ajay01");
console.log("the toekn is  :" + toekn);
