const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const{Schema} = mongoose;

 



const UserSchema = new Schema({

    name:{
        type:String,
        min:3,
        required:'Name is required',
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:'Email is required'
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:64
    },
    stripe_account_id:'',
    stripe_seller:{},
    stripeSession:{}

},{timestamps:true})





 
 UserSchema.pre('save',function(next){

    let user = this



    if(user.isModified(`password`)) {
   
        return bcrypt.hash(user.password,12,function(err,hash){

            if(err){
                console.log('Bcrpyt hass err',err);
                return next(err)
            }

            user.password = hash;
            return next();
         

        })
    }

    else{
        return next();
    }


 })

 const User = mongoose.model('User',UserSchema) 


 module.exports = User