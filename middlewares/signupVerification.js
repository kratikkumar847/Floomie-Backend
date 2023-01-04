// custom middlware for verifying the request body for signing up

const User = require("../models/user.model");
const Renter = require("../models/renter.model");

addMiddlewaresToSignupRequestUser = async (req, res, next) =>{

    // Validate if name is provided or not
    if(!req.body.name){
        console.log(res);
        return res.status(400).send(
            "Name is not provided"
        )
    }


    // Validate if username is provided or not
    if(!req.body.username){
        console.log(res);
        return res.status(400).send(
            "username is not provided"
        )
    }



    // Validate if the email is provided or not
    if( !req.body.email ){
        return res.status(400).send( "User Email is Not provided" )
    }


    // Validate if the password is provided or not
    if( !req.body.password ){
        return res.status(400).send("Password is not provided")
    }




    // Validate if the username is already exists
    const user = await User.findOne({username : req.body.username});
    if(user != null) {
        return res.status(400).send( "Username already exists" )
    }



    // Validate if the email is already exists
    const email = await User.findOne({email : req.body.email});
    // message : "Failed !  Email already exist"
    if( email!=null ){
        return res.status(400).send("Email Already Exists");
    }

    // validate the Password 
    // const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    // message : "Password must have at least 1 upper case, 1 lower case, 1 digit, 1 special characters, and should be 8 characters in length."
    // if( !passwordPattern.test( req.body.password )){
    //     return res.status(400).send( `Password must have at least - 1 upper case, 1 lower case,  1 digit, 1 special characters,  and should be 8 characters in length.`)
    // }
    
     next(); // give the controll to the controller

}

addMiddlewaresToSignupRequestRenter = async (req, res, next) =>{

    // Validate if name is provided or not
    if(!req.body.name){
        console.log(res);
        return res.status(400).send(
            "Name is not provided"
        )
    }


    // Validate if username is provided or not
    if(!req.body.username){
        console.log(res);
        return res.status(400).send(
            "username is not provided"
        )
    }



    // Validate if the email is provided or not
    if( !req.body.email ){
        return res.status(400).send( "User Email is Not provided" )
    }


    // Validate if the password is provided or not
    if( !req.body.password ){
        return res.status(400).send("Password is not provided")
    }




    // Validate if the username is already exists
    const user = await Renter.findOne({username : req.body.username});
    if(user != null) {
        return res.status(400).send( "Username already exists" )
    }



    // Validate if the email is already exists
    const email = await Renter.findOne({email : req.body.email});
    // message : "Failed !  Email already exist"
    if( email!=null ){
        return res.status(400).send("Email Already Exists");
    }

    // validate the Password 
    // const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    // message : "Password must have at least 1 upper case, 1 lower case, 1 digit, 1 special characters, and should be 8 characters in length."
    // if( !passwordPattern.test( req.body.password )){
    //     return res.status(400).send( `Password must have at least - 1 upper case, 1 lower case,  1 digit, 1 special characters,  and should be 8 characters in length.`)
    // }
    
     next(); // give the controll to the controller

}

module.exports = {
    addMiddlewaresToSignupRequestUser : addMiddlewaresToSignupRequestUser,
    addMiddlewaresToSignupRequestRenter : addMiddlewaresToSignupRequestRenter
 }