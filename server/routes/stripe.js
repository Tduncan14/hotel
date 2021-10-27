const express = require( "express");
const createConnectAccount = require("../controllers/stripe");
const  requireSignin  = require("../middlewares");



const router = express.Router()

//
// import {} from "../controllers/stripe";

router.post("/create-connect-account",requireSignin, createConnectAccount);
// router.post("/login",login)




module.exports = router;