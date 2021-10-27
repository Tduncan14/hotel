const mongoose = require('mongoose');
const express = require('express');
const Authrouter = require('./routes/auth');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();
const morgan = require('morgan');
const Striperouter = require('./routes/stripe');


const App  = express()



mongoose.connect(process.env.MONGOURI,{
    useNewUrlParser:true,

})
.then(() =>{
 console.log('hello database')
})
.catch((err) =>{
    console.log(err)
})

// read middleswares
// fs.readdirSync(`./routes`).map(r => {

// App.use(`/api`,require(`./routes/${r}`))
// })



App.use(express.json())
App.use(cors());
App.use(morgan('dev'));
App.use('/api',Authrouter)
App.use('/api',Striperouter)
// App.get("/api/:message",(req,res) => {
        
//     res.status(200).send(`here is your message ${req.params.message}`)
// }) 

Port = process.env.PORT || 8000;
 


App.listen(8000,() =>{

    return console.log(`running on ${Port}`)
})