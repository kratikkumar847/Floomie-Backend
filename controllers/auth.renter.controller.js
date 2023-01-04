const Renter = require("../models/renter.model")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config()

// Registration controller for the user 

exports.signup = async (req, res) =>{

    const renterData = {
        name : req.body.name,
        email : req.body.email,
        username : req.body.username,
        password : bcrypt.hashSync(req.body.password, 8),
        phone : req.body.phone,
    }
    console.log(renterData);

    // Created new user and store in the database
    try {
        const createdRenter = await Renter.create(renterData);
        // console.log(createdUser);

        // Response 
        const responseOFNewRenter = {
            name : createdRenter.name,
            email : createdRenter.email,
            username : createdRenter.username,
            phone : createdRenter.phone,
            createdAt : createdRenter.createdAt
        }

        return res.status(201).send({
            success : true,
            status : 201,
            message : `${createdRenter.name}, Added Successfully !!`,
            user : responseOFNewRenter
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
        var renter = await Renter.findOne({ username : req.body.username });
    } catch (error) {
        console.log(error);
    }

    if(renter == null){
        return res.status(400).send("Renter id doesn't exist !")
    }

    //user is exists, check for the valid password
    const isPasswordValid = bcrypt.compareSync(req.body.password , renter.password);

    if(!isPasswordValid){
        return res.status(401).send("Invalid Password");
    }

    // Successfull login 
    // now genrate the access token 
    const token = jwt.sign( { id: renter.username }, process.env.SECRET, {
        expiresIn : '2h'
    });

    //send the response back
    res.status(201).send({
        status : 200,
        success : true,
        message : `${renter.username} login Successfully ! `,
        user : {
            name : renter.name,
            renterID : renter.username,
            email : renter.email,
            occupation : renter.occupation,
            accessToken: token
        }
    })
}