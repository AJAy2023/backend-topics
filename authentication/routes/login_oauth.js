const express =  require("express");
const router = express.Router();
const loginWith = require("../controllers/login");
const verifyToken = require("../middlewares/verify");

router.get('/login', verifyToken, loginWith);

module.exports=router;


