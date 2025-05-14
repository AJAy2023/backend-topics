
// basic http server 
const http = require('http');
const server =   http.createServer((req, res)=>{
    res.write("hello from node.js server....");
    res.end();
});
server.listen(3000, ()=>{
    console.log('server on http://localhost:3000');
});
