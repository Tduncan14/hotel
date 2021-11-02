const User = require('../models/User')
const Stripe = require('stripe');
const queryString = require('query-string');

 const stripe = Stripe(process.env.STRIPE_SECRET)


exports.createConnectAccount = async (req,res) => {
  // find user from db

  // create account link based on accound id for for frontend
  // update payment scehdule

   const user = await User.findById(req.user._id).exec()
    // if user dont have stripe acount _create now
     console.log(user)





  if(!user.stripe_account_id){

    
    const account = await stripe.accounts.create({
        type:'express',
    })


    console.log('Account ==>' ,account);

    user.stripe_account_id = account.id;
    
    user.save();


  }

  // create account login link for accountid for frontend to complete onboard

  let accountLink = await stripe.accountLinks.create({

    account: user.stripe_account_id,
    refresh_url: process.env.STRIPE_REDIRECT_URL,
    return_url: process.env.STRIPE_REDIRECT_URL ,
    type: 'account_onboarding',
  })


  // prefill any info such as email

  accountLink = Object.assign(accountLink,{
      "stripe_user[email]":user.email || undefined,

  })

  console.log('account link', accountLink)

    //sending the link into the front end'

    let link = `${accountLink.url}?${queryString.stringify(accountLink)}`


    console.log( "====>",link)

    res.send(link)

}

// pending payment stripe delay days


exports.updateDelayDays = async(accountId) => {


     const account = await stripe.accounts.update(accountId,{
       settings:{
         payouts:{
           schedule:{
             delay_days:7,
           }
         }
       }
     });


     return account





}


exports.getAccountStatus = async (req,res) =>{

  // console.log('GET ACCOUNT STATUS')


  const user = await User.findById(req.user._id).exec();

  const account = await stripe.accounts.retrieve(user.stripe_account_id);

  // console.log('user accoutn retireve',account)
  // update delayed days


  const updatedAccount = await this.updateDelayDays(account.id)

  const updatedUser = await User.findByIdAndUpdate(user._id,{
    stripe_seller: updatedAccount
  }, {new:true}).select('-password').exec();



  // console.log("this is the user,",updatedUser)


   res.json(updatedUser)




}



exports.getAccountBalance = async(req,res) => {

  const user = await User.findById(req.user._id).exec();

  try {
    const balance = await stripe.balance.retrieve({
      stripeAccount: user.stripe_account_id,
    })

    console.log('======>', balance)

    res.json(balance)

  }

  catch(err){
    console.log(err)
  }






}

