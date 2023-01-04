const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config()

// Registration controller for the user 

exports.signup = async (req, res) =>{

    const userData = {
        name : req.body.name,
        username : req.body.username,
        password : bcrypt.hashSync(req.body.password, 8),
        gender : req.body.gender,
        email : req.body.email,
        occupation : req.body.occupation
    }
    console.log(userData);

    // Created new user and store in the database
    try {
        const createdUser = await User.create(userData);
        // console.log(createdUser);

        // Response 
        const responseOFNewUser = {
            name : createdUser.name,
            username : createdUser.username,
            email : createdUser.email,
            gender : createdUser.gender,
            occupation : createdUser.occupation,
            createdAt : createdUser.createdAt
        }

        return res.status(201).send({
            success : true,
            status : 201,
            message : `${createdUser.name}, Added Successfully !!`,
            user : responseOFNewUser
        });
        

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: error.massage
        })
    }
}


// signin controller

exports.signin = async (req, res ) =>{

    // Search the user if it exists
    try {
        var user = await User.findOne({ username : req.body.username });
    } catch (error) {
        console.log(error);
    }

    if(user == null){
        return res.status(400).send("User id doesn't exist !")
    }

    //user is exists, check for the valid password
    const isPasswordValid = bcrypt.compareSync(req.body.password , user.password);

    if(!isPasswordValid){
        return res.status(401).send("Invalid Password");
    }

    // Successfull login 
    // now genrate the access token 
    const token = jwt.sign( { id: user.username }, process.env.SECRET, {
        expiresIn : '2h'
    });

    //send the response back
    res.status(201).send({
        status : 200,
        success : true,
        message : `${user.username} login Successfully ! `,
        user : {
            name : user.name,
            userID : user.username,
            email : user.email,
            occupation : user.occupation,
            accessToken: token
        }
    })
}