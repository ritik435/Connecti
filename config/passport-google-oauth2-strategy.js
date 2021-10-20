const passport=require('passport');
const googleStrategy=require('passport-google-oauth').OAuth2Strategy;
const User=require('../models/user');
const crypto=require('crypto');

passport.use(new googleStrategy({
        clientID:"765787182864-er4qsb148t63l4t883dlgrrmgud1tu7f.apps.googleusercontent.com" ,
        clientSecret: "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" ,
        callbackURL: "http://localhost:8000/users/auth/google/callback"
    },
    function(accessToken,refreshToken,profile,done){
        //find a user
        User.findOne({email:profile.emails[0].value}).exec(function(err,user){
            if(err){console.log('error in google strategy',err); return;}

            // console.log(profile);
            if(user){

                return done(null,user);
            }else{
                //if not found,create the user &set it as req.user
                User.create({
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    password:crypto.randomBytes(20).toString('hex')
                },function(err,user){
                    if(err){console.log('error in creating user',err); return;}

                    return done(null,user);
                }
                )
            }
        })
    }
))


module.exports=passport;