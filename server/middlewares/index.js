const  expressJWT = require('express-jwt');


//req.user information by default
 const requireSignin = expressJWT({

    //secret, expiryDate
   secret:process.env.JWT_SECRET ,
   algorithms:["HS256"]



})


module.exports = requireSignin;