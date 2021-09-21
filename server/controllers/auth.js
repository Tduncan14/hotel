const User = require('../models/User');


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