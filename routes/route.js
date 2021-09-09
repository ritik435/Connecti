const { application } = require('express');
const express= require('express');
const homeController= require('../controllers/home_controller.js');
const router=express.Router();


console.log("router enabled");

router.get('/', homeController.home )

module.exports=router;