{
    let createPost= function(){
        let postForm=$('#postForm');
        //receive the data in json object
        postForm.submit(function(e){
            e.preventDefault();
            $.ajax({
                type:'post',
                url:'/posts/create-post',
                data: postForm.serialize(),
                success : function(data){
                    let newPost= postFormDom(data.data.post);
                    $('#posts-list-container').prepend(newPost);
                    deletePost($(' .delete-post-btn',newPost));
                },
                error :function(error){
                    console.log(error.responseText);
                }
            });
        });
    }
    // method to create a post in DOM 
    let postFormDom=function(post){
       return(`<div id="post-${ post._id }" class="posts">
                    
                    <p>
                        <h3>
                            ${ post.content }
                        </h3>
                        <small>
                            <a class="delete-post-btn" href="/posts/destroy-post/${ post._id }">Delete it</a>
                        </small>                        
                        <small class='post-user'>
                            ${ post.user.name}
                        </small>
                    </p>
                        <div class="comments-form">
                            
                            <form action="/comments/create-comment" method="POST">
                                <textarea name="content" cols="20" rows="2" placeholder="Comment it" required></textarea>
                                <input type="hidden" name="post" value="${ post.id}">
                                <button>Add Comment</button>
                            </form>
                            <div class="comments">
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
                },error: function(error){
                    console.log(error.responseText);
                }
            });

        });
    }

    createPost();

}