const express= require('express');
const router=express.Router();
const passport=require('../config/passport-local-strategy');

const postController= require('../controllers/post_controller.js');

router.post('/create-post',passport.checkAuthentication,postController.createPost);

router.get('/destroy-post/:id',passport.checkAuthentication,postController.destroyPost);

module.exports=router;