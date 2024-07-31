const { error } = require("console");
const express = require("express");
const applyMiddleware = require("./middleware/applyMiddleware");
require("dotenv").config();
const app = express();



const authenticationRoutes = require('./routes/Authentication/index')
const getUsers = require('./routes/GetUsers');
const createUsers = require('./routes/users')
const register = require('./routes/Register')
const login = require('./routes/Login')


applyMiddleware(app)



app.use(authenticationRoutes)
app.use(createUsers);
app.use(getUsers);
app.use(register);
app.use(login)


const fetchData = () => {
    // Implement your data fetching logic here
    return "Data fetched successfully";
  };
app.get('/user', async(req, res) => {
    try {
        const data = await fetchData(); // Replace with actual function
        res.send(data);
      } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).send('Internal Server Error');
      }
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
