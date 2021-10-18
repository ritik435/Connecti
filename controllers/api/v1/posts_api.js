const Post=require('../../../models/post');
const Comment=require('../../../models/comment');


module.exports.index=async function(req,res){
    let posts = await Post.find({});
    return res.json(200,{
        message :"List of posts",
        posts:posts
    })
}

module.exports.destroy = async function(req, res){

    try{
        let post = await Post.findById(req.params.id);

        if (post.user == req.user.id){
            post.remove();
            await Comment.deleteMany({post: req.params.id});
                return res.json(200,{
                    
                    message: "Post and associated comments deleted!"
                });
        }else{
            return res.json(401 ,{
                    
                message: "UnAuthorized"
            });
        }

    }catch(err){
        // req.flash('error', err);
        console.log(err);
        console.log('Internal ERROR');

        return res.json(500,{
            message:'Internal ERROR'
        })
    }
    
}
