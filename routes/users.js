const express= require('express');
const usersController= require('../controllers/user_Controllers.js');
const router=express.Router();


console.log("user router enabled");

router.get('/profile', usersController.profile )

router.get('/', usersController.score )

router.get('/likes',usersController.likes)

router.get('/sign-in',usersController.signIn);
router.get('/sign-up',usersController.signUp);



module.exports=router;