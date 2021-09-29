const { populate } = require('../models/post');
const Post=require('../models/post');
const User=require('../models/user');


//asynchronous function
module.exports.home = async function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);

    // Post.find({}, function(err, posts){
    //     return res.render('home', {
    //         title: "Connecti | HomePage",
    //         posts:  posts
    //     });
    // });

    // populate the user of each post
    try{
        //await = wait till it is processed
        let posts=await Post.find({}).populate('user')
        .sort('-createdAt')
        .populate('user')
    .populate({
        path : 'comments',
        populate : {
            path:'user'
        }
    });
    //wait till posts is processed
    let users= await User.find({});

        return res.render('home', {
                title: "Connecti | HomePage",
                posts:  posts,
                all_users :users
            });
    }
    catch(err){
        console.log("Error",err);
        return;
    }
    

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
