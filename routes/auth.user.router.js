const authUser = require("../controllers/auth.user.controller");
const express = require("express");
const { signupVerification } = require("../middlewares")
const router = express.Router();


// Signup -- Post
router.post('/auth/user/signup', [signupVerification.addMiddlewaresToSignupRequestUser] , authUser.signup);


// Signin -- Post
router.post('/auth/user/signin' , authUser.signin);


module.exports = router; 