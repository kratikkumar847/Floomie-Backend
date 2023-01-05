const postController = require("../controllers/post.controller");
const JWTAuth = require("../middlewares/JWTAuth")
const express = require("express");
const router = express.Router();


// create a new post
router.post('/newpost', [ JWTAuth.verifyToken ] , postController.createPost);

// get all the posts 
router.get('/getallposts', [ JWTAuth.verifyToken ] , postController.getAllPosts)

// Delete post by post_id
router.delete('/delete/:id', [ JWTAuth.verifyToken ] , postController.deletePost)

// Get post by username of renter
router.get('/postofrenter', [ JWTAuth.verifyToken ] , postController.getPostsByUsername)

// Get post by Type of customer
router.get('/typeofcustomer', [ JWTAuth.verifyToken ] , postController.getPostsByTypeOfCustomer)


module.exports = router ; 