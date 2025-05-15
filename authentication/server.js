const express = require("express");
const dotenv = require({path:( __dirname + ".env")});
const app  = express();
const connectDB = require("./config/db");
const loginWith = require("./routes/login_oauth");
const PORT = process.env.PORT;
connectDB()
app.use(express.json());
app.use('/login',loginWith )
app.get("/", (req, res)=>{
    res.send("welcome to the home page");
})

app.listen(PORT,()=>{
    console.log(`server  is  running  on ${PORT}`)
})
