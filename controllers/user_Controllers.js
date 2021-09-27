const User = require('../models/user');
// const Post=require('../models/post');
module.exports.profile = function(req, res){
    User.findById(req.params.id,function(err,user){
        return res.render('users_profile', {
            title: 'User Profile',
            user_profile :user
            
        })

    })
    
}
module.exports.update=function(req,res){
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id , req.body ,function(err, user){

            return res.redirect('back');
        })
    }else{
        return res.status(401).send('Unauthourized');
    }
}

module.exports.score = function(req,res){
    return res.end("<h1>Scored points are</h1>")
}

module.exports.likes=function(req,res){
    return res.end("<h1>Liked it</h1>");
}

// render the sign up page
module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }


    return res.render('signup', {
        title: "Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){

    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('signin', {
        title: "Sign In"
    })
}

// get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return;}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('/');
        }

    });
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout();
    return res.redirect('/');
}




