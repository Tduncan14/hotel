const User = require('../models/User')
const Stripe = require('stripe');

 const stripe = Stripe(process.env.STRIPE_SECRET)


const createConnectAccount = async (req,res) => {
  // find user from db

  // create account link based on accound id for for frontend
  // update payment scehdule

   const user = await User.findById(req.user._id).exec()
    // if user dont have stripe acount _create now
     console.log(user)



    const account = await stripe.accounts.create({
        type:'express',
    })


    console.log('Account ==>' ,account);






    


}

module.exports = createConnectAccount;