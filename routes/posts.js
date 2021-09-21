const express= require('express');
const router=express.Router();

const postController= require('../controllers/post_controller.js');

router.post('/create-post',postController.createPost);

module.exports=router;