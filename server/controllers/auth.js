const User = require('../models/User');
const jwt = require('jsonwebtoken');


exports.register = async(req,res) => {

     console.log(req.body)

     const{name,email,password} = req.body;

     
     if(!name) return res.status(400).send('Name is required')
     if(!password || password.length < 6) return res.status(400).send('Password is required and needs to 6 characters lsong');
     
    

    let userExist = await User.findOne({email:email}).exec()

    if(userExist) return res.status(400).send('Email is taken');

    // register the user

    const user = new User(req.body)
    try{
        await user.save()
        console.log('user was created')
        return res.json({
            ok:true
        })
    }
    catch(err){
        console.log('Create User failed',err)

        return res.status(400).send('Error.Try again');
    }


}


exports.login = async (req,res) => {


    // console.log(req.body);

    const{email,password} = req.body
 


    try{
        //check if user existed
        
        let user = await User.findOne({email}).exec();

        console.log('User exist',user);


        if(!user) res.status(400).send('user with that email not found');
        //compare password

        user.comparePassword(password,(err,match) => {

            console.log('Compare password in log in error')

            if(!match || err) return res.status(400).send('Wrong Password')


            // generate token and send to client and create a token

           
           let token = jwt.sign({_id:user._id},process.env.JWT_SECRET,{
                expiresIn:'2d'
            });
            

            res.json({token,user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                createdAt:user.createdAt,
                updatedAt:user.updatedAt,
                stripe_account_id: user.stripe_account_id,
                stripe_seller:user.stripe_seller,
                stripeSession:user.stripeSession

            }})

        })



    }

    catch(err){
        
        console.log("Login err",err)
        res.status(400).send("Signin in failed");




    }





}




