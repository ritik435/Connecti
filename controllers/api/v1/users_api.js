const User=require('../../../models/user');
const jwt=require('jsonwebtoken');

module.exports.createSession=async function(req,res){
     try{
        let user=await User.findOne({email : req.body.email});
        if(!user || req.body.password != user.password){
            return res.json(422,{
                message:'Invalid Username/Password'
            });

        }
        return res.json(200,{
            message:'Sign In successful,here is your token',
            data :{
                token : jwt.sign(user.toJSON(), 'connecti' , { expiresIn : '500000' })
            }
        })
     }
     catch(err){
         console.log(`Error in creating a session ${err}`)
         return res.json(500,{
             message:'Internal Error'
         });
     }
}