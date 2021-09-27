const { populate } = require('../models/post');
const Post=require('../models/post');
const User=require('../models/user');



module.exports.home = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);

    // Post.find({}, function(err, posts){
    //     return res.render('home', {
    //         title: "Connecti | HomePage",
    //         posts:  posts
    //     });
    // });

    // populate the user of each post
    Post.find({}).populate('user')
    .populate({
        path : 'comments',
        populate : {
            path:'user'
        }
    })
    .exec(function(err, post){
        User.find({},function(err,users){
            return res.render('home', {
                title: "Connecti | HomePage",
                posts:  post,
                all_users :users
            });


        })
        
    })

}















// module.exports.home = function(req,res){
//     // console.log(req.cookies);

//     Post.find({}).populate('user').exec(function(err,posts){
        
//         return res.render('home',{
//             title:'Connecti| Homepage',
//             started : 'let the good be on',
//             posts :posts
//         })
//     })
    


//     // Post.find({}).populate('user').exec(function(err , posts){
//     //     return res.render('home',{
//     //         title:"Connecti | Homepage",
//     //         started:"go on good work",
//     //         posts : posts
//     //     })

//     // })
    

// }


module.exports.play =function(req,res){
    return res.end("<p>i am here because of error</p>")
}

module.exports.anime=function(req,res){
    return res.end("<h1>This is a great anime</h1>");
}
