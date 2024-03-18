var express = require("express");
const fs = require("fs");
const port = 4000;
const app = express();
var session = require("express-session");

app.use(express.json());
app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: true,
}));

app.use(logger);

app.get("/", (req, res) => {
    /* Authorization
    If user is logged in, show home, else show login */
    if (req.session.isLoggedIn == true) {
        var name = req.session.username
        res.end("<h1> Welcome " + name + "</h1>");
    } else {
        res.sendFile(__dirname + "/Login.html");
    }
});

app.get("/login.js", function (req, res) {
    fs.readFile("./login.js", "utf-8", (err, data) => {
        if (err) {
            console.error('Error reading login.js file:', err);
            res.status(500).end(); // Respond with 500 Internal Server Error
        } else {
            res.setHeader('Content-Type', 'application/javascript'); // Set Content-Type header
            res.end(data); // Serve the content of login.js
        }
    });
});

app.post("/login", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    fs.readFile("./db.txt", "utf-8", (err, data) => {
        if (err) {
            res.status(404).end("Users not found");
            return;
        }
        
        var users = JSON.parse(data);
        var Ourusers = users.filter(function (user) {
            return user.username === username && user.password === password;
        });

        if (Ourusers.length) {
            req.session.isLoggedIn = true;
            req.session.username = Ourusers[0].username
            res.status(200).end("login Success");
        } else {
            res.status(404).end("login Failed");
        }
    });
});

app.get("logout", (req,res)=>{
    req.session.destroy()
    res.end()
})

function logger(req, res, next) {
    console.log(req.url);
    next(); // Call next() to pass control to the next middleware/route handler
}

app.listen(port, function () {
    console.log(`Server is listening on ${port}`);
});




