const Comment=require('../models/comment');
const Post=require('../models/post');

module.exports.createComment = async function(req, res){

    try{
        let post=await Post.findById(req.body.post);
    if(post){
            let comment=await Comment.create({
                content:req.body.content,
                user : req.user._id,
                post : req.body.post
            });
            post.comments.push(comment);
                post.save();
                res.redirect('/');
        }

    }catch(err){
        console.log("error",err);
        return;
    }
    
}


module.exports.destroyComment=async function(req,res){
    let comment=await Comment.findById(req.params.id);
    if(comment.user == req.user.id){


            //remove comment from the post
            let postId=comment.post;
            comment.remove();
            let post=await Post.findByIdAndUpdate(postId,{ $pull: {comments : req.params.id}});
            return res.redirect('back');
            
        }else{
            return res.redirect('back');
        }
}


