const express = require('express');


const router = express.Router();





router.get('/:message',(req,res) => {



    res.status(200).send(`this is the message`)
})


module.exports = router;