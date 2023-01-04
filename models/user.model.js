const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },

    occupation: {
        type: String,
        required: true
    }
})


//These will automatically generates the created and updated fields 
userSchema.set('timestamps' , true);


module.exports = mongoose.model("User", userSchema)