const { error } = require("console");
const express = require("express");
const applyMiddleware = require("./middleware/applyMiddleware");
require("dotenv").config();
const app = express();




const getUsers = require('./routes/GetUsers');
const createUsers = require('./routes/Users')
applyMiddleware(app)


app.use(createUsers);
app.use(getUsers);

app.get('/health', (req, res) => {
    res.send('quizTask')
})

app.all('*', (req, res, next)=>{
    const error = new Error(`The requested url: is invalid ${req.url}`)
    error.status = 404;
    next(error)
})


app.use((err, req, res, next)=>{
    res.status(error.status || 500).json({
        message:err.message
    })
})


module.exports= app;
