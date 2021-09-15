const express= require('express');
const homeController= require('../controllers/home_controller.js');
const router=express.Router();


console.log("router enabled");


router.get('/', homeController.home )
router.get('/play', homeController.play );
router.get('/anime', homeController.anime );



router.use('/users' , require('./users'))





module.exports=router;