{
    let createPost= function(){
        let postForm=$('#Post-Form');
        //receive the data in json object
        postForm.submit(function(e){
            e.preventDefault();
            $.ajax({
                type:'post',
                url:'/posts/create-post',
                data: postForm.serialize(),
                success : function(data){
                    let newPost= postFormDom(data.data.post);
                    $('#posts-list-container>div').prepend(newPost);
                    deletePost($(' .delete-post-button'),newPost)

                    new PostComments(data.data.post._id);
                    new Noty({
                        theme: 'relax',
                        text: "Post published!",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show();
                },
                error :function(error){
                    console.log(error.responseText);
                }
            });
        });
    }
    // method to create a post in DOM 
    let postFormDom=function(post){
       return(`<!-- add post -->
<div id="post-${post._id }" class="posts">
    
       
        <h3>
            ${ post.content }
    </h3>
        <small>
        <a class="delete-post-button" href="/posts/destroy-post/${ post._id }">Delete it</a>
        </small>
        <small class='post-user'>
            ${ post.user.name }
        </small>

            
            <div class="post-comments">
                <form id="post-${ post._id }-comments-form" action="/comments/create-comment"  method="POST">
                    <textarea name="content" cols="20" rows="2" placeholder="Comment it" required></textarea>
                    <input type="hidden" name="post" value="${ post.id}">
                    <button>Add Comment</button>
             </form> 
            
            <div id="post-comments-list">
                <div id="post-comments-${ post._id }">
                      
                 </div>
            </div>


            </div>
            

    
</div>    `);

    }



    //delete a post from DOM
    let deletePost = function(deleteLink){
        $(deleteLink).click(function(e){
            e.preventDefault();

            $.ajax({
                type: 'get',
                url: $(deleteLink).prop('href'),
                success: function(data){
                    $(`#post-${data.data.post_id}`).remove();
                    new Noty({
                        theme: 'relax',
                        text: "Post Deleted",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show();
                },error: function(error){
                    console.log(error.responseText);
                }
            });

        });
    }
    let convertPostsToAjax = function(){
        $('#posts-list-container > div').each(function(){
            let self = $(this);
            let deleteButton = $(' .delete-post-button', self);
            deletePost(deleteButton);

            // get the post's id by splitting the id attribute
            let postId = self.prop('id').split("-")[1]
            new PostComments(postId);
        });
    }
    createPost();
    convertPostsToAjax();

}