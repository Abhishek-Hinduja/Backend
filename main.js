var express = require("express")
const fs = require("fs")

const app = express()

const port = 3000

app.use(express.json())

app.use(logger)

app.use(express.static("todo"))

app.post("/save", (req,res)=>{
    fs.readFile("./db.txt", "utf-8", (err,data)=>{
        var todos = []
        if (data.length>0){
            todos = JSON.parse(data)
        }
        todos.push(req.body)

        fs.writeFile("./db.txt", JSON.stringify(todos), function(err,data){
            res.end()
        })
    })
})

app.get("/gettodo", (req,res)=>{
    fs.readFile("./db.txt", "utf-8", (err,data)=>{
        res.end(data)
    })
})

function logger(req,res,next){
    console.log("req received at ", Date.now())
    console.log("req recieved at ", req.url)
    console.log("req recieved at ", req.method)
    next()
}


app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})



