const express =  require('express')
const app = express()
const ratelimit = require('express-rate-limit');
const { STATUS_CODES } = require('http');   
app.use(express.json());
const port = 8000

const  limiter = ratelimit(
    {
        
       windowMs:1*60*1000,
       max:3,
       STATUS_CODES:429,
       message:"to many request from same  IP address"
    }
)
app.use(limiter)

app.get('/', (req, res)=>{
    res.send("hello server i am ajay....");
});
app.get('/about',(req, res)=>{
    res.send("this is the  about section ");
})



app.listen(port, ()=>{
    console.log("server is running ...");
} )