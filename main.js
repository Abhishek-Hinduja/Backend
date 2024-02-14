const http = require('http');
const fs = require('fs')
var port = 4000


const server = http.createServer((req,res)=>{
    if (req.method == "GET"){
        if (req.url == "/"){
            fs.readFile("./index.html", "utf-8", (err,data)=>{
                res.end(data)
            })
        }
        else if(req.url == "/about"){
            res.end("Welcome to the About page")
        }
        else{
            res.end("Invalid url")
        }
    }
    else{
        res.end("Invalid Method")
    }
})

server.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})



