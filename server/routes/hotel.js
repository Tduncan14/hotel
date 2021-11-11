const express = require('express');
const formidable = require('express-formidable');
const  requireSignin  = require("../middlewares");
 
const router  = express.Router()


const {create} = require('../controllers/hotel');



router.post('/create-hotel',requireSignin,formidable(),create);



module.exports  = router;