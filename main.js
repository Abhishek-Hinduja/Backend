const http = require('http');

var port = 4000

const server = http.createServer((req,res)=>{
    console.log("Hello World")
    res.end()
})

server.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})