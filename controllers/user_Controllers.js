const User = require('../models/user');

module.exports.profile = function(req,res){
    
     return res.render('users_profile',{
          title:"user Profile"
     })
}

module.exports.score = function(req,res){
    return res.end("<h1>Scored points are</h1>")
}

module.exports.likes=function(req,res){
    return res.end("<h1>Liked it</h1>");
}

module.exports.signUp=function(req,res){
    return res.render('signUp',{
        title:"signUp",
        started:"SignUp page"
    })
}

module.exports.signIn=function(req,res){
    
    return res.render('signIn',{
        title:"signIn",
        started:"SignIn page"
    })
}


