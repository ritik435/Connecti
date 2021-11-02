const ResetPassword=require('../models/resetPassword');
const User=require('../models/user');
const crypto=require('crypto');
// const resetPasswordMailer=require('../views/mailers/resetPasswordMailer');

module.exports.createResetPass= async function(req,res){
    let tokenUser=await ResetPassword.findOne({token : req.params.id})
    .populate('user')
    .exec(function(err){
        if(err){
            console.log('Error in resetting password Controller',err);
            return;
        }
        tokenUser.isValid=false;
        if(req.body.password !=req.body.confirm_password){
            return res.redirect('/users/sign-up');
        }
        User.findByIdAndUpdate(tokenUser,{
            password : req.body.password
            },function(err,user){
                if(err){console.log('Error in updating password',err); return;}
                
                
                return res.redirect('/users/sign-in');
        })
    })
}


module.exports.forgotPasswordForm=async function(req,res){
    let resetPassword = await Post.create({
        token:crypto.randomBytes(20).toString('hex'),
        user: req.user._id
    });

    return res.render('reset_password_mailer',{
        resetPassword:resetPassword
    })
}