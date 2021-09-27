const express= require('express');
const router=express.Router();
const passport=require('../config/passport-local-strategy');

const commentController=require('../controllers/comment_Controller');


router.post('/create-comment',passport.checkAuthentication,commentController.createComment);

router.get('/destroy-comment/:id',passport.checkAuthentication,commentController.destroyComment);

module.exports=router;