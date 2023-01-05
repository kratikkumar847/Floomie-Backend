const mongoose = require("mongoose");

const post = new mongoose.Schema({
    username : {
        type: String,
        required: true
    },

    typeofcustomer : {          // eg. family, boys, girls
        type: String,
        required: true
    },

    city : {
        type: String,
        required: true
    },

    securitymoney : {
        type: Number,
        default : 0
    },

    waterbill : {
        type : Boolean,
        required : true
    },

    electricitybill : {
        type : Boolean,
        required : true
    },

    pincode : {
        type : Number,
        default : 0
    },

    fulladdress : {
        type : String,
        required : true
    },

})



//These will automatically generates the created and updated fields 
post.set('timestamps' , true);


module.exports = mongoose.model('Post', post)