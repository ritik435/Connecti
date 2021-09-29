const Post=require('../models/post');
const Comment=require('../models/comment');

module.exports.createPost=async function(req,res){
    let post=await Post.create({
        content:req.body.content,
        user:req.user._id
    });
    if (req.xhr){
            return res.status(200).json({
                data: {
                    post: post
                },
                message: "Post created!"
            });
        }
    req.flash('success','Successfully created a Post');
    // return res.redirect('back');
}

module.exports.destroyPost=async function(req,res){
    let post = await Post.findById(req.params.id);
    if(post.user == req.user.id){
            post.remove();
            await Comment.deleteMany({post: req.params.id});


            if (req.xhr){
                return res.status(200).json({
                    data: {
                        post_id: req.params.id
                    },
                    message: "Post deleted"
                });
            }

            
            req.flash('success','Successfully removed the post');
            // return res.redirect('back');
        }
        else{
            return res.redirect('back');
        }
}


