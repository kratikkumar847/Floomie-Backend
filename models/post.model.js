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

    fulladdress : {
        type : String,
        required : true
    },

})



//These will automatically generates the created and updated fields 
renterSchema.set('timestamps' , true);


module.exports = mongoose.model('Post', post)