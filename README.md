# Backend
### What are middleware ?
They are like checkpoints they have the access of req,res,next() every request will go from middleware. Middleware are used for those work which have to perform for every function.

### What is the difference between res.end() and res.send()?
res.end() will render only string type of data and res.send() will render any type of data.

### Why we write content-type application/json?
it states that the format of data is json.

### What is body parser?
It takes json data from the client and paste it to the req.body.