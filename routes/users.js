const express= require('express');
const usersController= require('../controllers/user_Controllers');
const router=express.Router();
const passport=require('passport');


console.log("user router enabled");

router.get('/profile/:id', passport.checkAuthentication, usersController.profile);
router.post('/update/:id', passport.checkAuthentication, usersController.update);


router.get('/', usersController.score )

router.get('/likes',usersController.likes)

router.get('/sign-in',usersController.signIn);
router.get('/sign-up',usersController.signUp);

router.post('/create',usersController.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);

router.get('/sign-out',usersController.destroySession);



// router.post('/create-post',usersController.createPost);

module.exports=router;