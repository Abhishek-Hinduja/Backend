var express = require("express")
const fs = require("fs")

const app = express()

const port = 4000

app.use(express.json())

app.get("/", (req,res)=>{
    fs.readFile("./index.html", "utf-8", (err,data)=>{
        res.end(data)
    })
})

app.get("/index.js", (req,res)=>{
    fs.readFile("./index.js", "utf-8", (err,data)=>{
        res.end(data)
    })
})

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


app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})



