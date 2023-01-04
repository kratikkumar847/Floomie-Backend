const authRenter = require("../controllers/auth.renter.controller");
const express = require("express");
const { signupVerification } = require("../middlewares")
const router = express.Router();


// Signup -- Post
router.post('/auth/renter/signup', [signupVerification.addMiddlewaresToSignupRequestRenter] , authRenter.signup);


// Signin -- Post
router.post('/auth/renter/signin' , authRenter.signin);


module.exports = router ; 