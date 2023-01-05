const Post = require("../models/post.model");
const Renter = require("../models/renter.model")
const response  = require("../utils/response")


// Created new post 
exports.createPost = async (req,res) =>{
    const postData = {
        username : req.body.username,
        typeofcustomer : req.body.typeofcustomer,
        city : req.body.city,
        securitymoney : req.body.securitymoney,
        waterbill : req.body.waterbill,
        electricitybill : req.body.electricitybill,
        pincode : req.body.pincode,
        fulladdress : req.body.fulladdress
    }

    try {
        const renter = await Renter.findOne({
            username : req.body.username
        });

        const createdPost  = await Post.create(postData);

        renter.post.push(createdPost);

        const newPost = {
            username : createdPost.username,
            typeofcustomer : createdPost.typeofcustomer,
            city : createdPost.city,
            securitymoney : createdPost.securitymoney,
            waterbill : createdPost.waterbill,
            electricitybill : createdPost.electricitybill,
            pincode : createdPost.pincode,
            fulladdress : createdPost.fulladdress,
            createdAt : createdPost.createdAt,
            updatedAt : createdPost.updatedAt
        }

        renter.post.push(newPost);

        await renter.save();
        await createdPost.save();

        res.status(201).send({
            success : true,
            status : 201,
            message : `${createdPost._id}, Added Successfully !`,
            post : newPost
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error , while Adding POST !"
        })
    }
}


// get all post
exports.getAllPosts = async (req, res) =>{
    try {
        const post = await Post.find();
        return res.status(201).send({
            success : true,
            status : 201,
            message : `Fetched all the posts successfully !`,
            posts : response.postResponse(post)
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error , while getting all POSTS !"
        })
    }
}



// delete post by POSTID
exports.deletePost = async (req, res) =>{
    try {
        const post = await Post.findById(req.params.id);
        console.log("Post : ", post);
        if(!post){
            return res.status(403).send({
                success : false,
                message : "Post does not found"
            })
        }
        if(post.username === req.body.username){
            console.log("Post UserId : ", post.username);
            await post.deleteOne();
            res.status(201).send({
                success : true,
                status : 201,
                message : `The post has been deleted successfully !`
            })
        }
        else {
            console.log("Post UserId : ", "Error");
            res.status(403).send({
                success : false,
                message : "You can delete only your posts !"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success : false,
            message : `Error While deleting the post`
        })
    }
}



// get post by username of renter 
exports.getPostsByUsername = async (req, res) =>{
    try {
        const post = await Post.find({username : req.body.username});
        return res.status(201).send({
            success : true,
            message : `Fetched all posts created by ${req.body.username}`,
            totalPost : post.length,
            posts : post
        })
        
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success : false,
            message : `Error While Fetching the post of renter`
        })
    }
}


// get post by type of customers
exports.getPostsByTypeOfCustomer = async (req, res) =>{
    try {
        const post = await Post.find({typeofcustomer : req.body.typeofcustomer});
        
        return res.status(201).send({
            success : true,
            message : `Fetched All posts by ${req.body.typeofcustomer}`,
            totalPost : post.length,
            Posts : post
        })

    } catch (error) {
        console.log(error);
        res.status(401).send({
            success : false,
            message : `Error While Fetching the post by type of customer`
        })
    }
}