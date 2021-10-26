import express from "express";
import { createConnectAccount } from "../controllers/stripe";



const router = express.Router()

//
// import {} from "../controllers/stripe";

router.post("/create-connect-account", createConnectAccount);
router.post("/login",login)




module.exports = router;