const mongoose = require("mongoose");

const renterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    phone : {
        type : Number,
        required: true,
        maxlength: 10,
        minlength: 10
    },

    post:{
        type: Array,
        default: []
    }
})


//These will automatically generates the created and updated fields 
renterSchema.set('timestamps' , true);


module.exports = mongoose.model('Renter', renterSchema);