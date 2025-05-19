const express  = require("express");
const connectDB = require("./db");
const User = require("./user");
const app = express();
const registerdata = require("./regitser");
const userdata = require("./getall");

// calling the db 
connectDB();
const PORT=5000;

app.use(express.json());
app.use('/', registerdata);
app.use('/', userdata);


app.get('/', (req, res)=>{
    res.status(200).json({
        mag:"welcome to home page"
    });
});

app.listen(PORT, ()=>{
    console.log(`server is  running  on the ${PORT}`);
})
