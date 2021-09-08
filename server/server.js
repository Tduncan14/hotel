const mongoose = require('mongoose');
const express = require('express');
const Authrouter = require('./routes/auth');



const App  = express()

 

App.use('/api',Authrouter)
// App.get("/api/:message",(req,res) => {
        
//     res.status(200).send(`here is your message ${req.params.message}`)
// }) 

Port = process.env.PORT || 8000;



App.listen(8000,() =>{

    return console.log(`running on ${Port}`)
})