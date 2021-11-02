const express = require('express');
const router = express.Router();
const passport = require('passport');

const resetPassController = require('../controllers/resetPassword_controller');

router.get('/:token',resetPassController.forgotPasswordForm);
router.post('/:token',resetPassController.createResetPass);


module.exports = router;