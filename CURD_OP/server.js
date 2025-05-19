const express  = require("express");
const connectDB = require("./db");
const app = express();

// calling the db 
connectDB();
const PORT=5000;

app.get('/', (req, res)=>{
    res.status(200).json({
        mag:"welcome to home page"
    });
});

app.listen(PORT, ()=>{
    console.log(`server is  running  on the ${PORT}`);
})
