const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
        minlength : 3,
        maxlength : 20
    },

    age : {
        type : Number,
        required : true,
    },

    gender : {
        type : String,
        required : true,
        enum : ["Male", "Female"]
    },
    description : {
        type : String,
        maxlength : 200
    },
    likeCount : Number,

    proPic : {
        type: String,
        required : true
    },

    features : {
        type : String,
        minlength: 3,
        maxlength: 50,
    },

    contactNo : {
        type : Number,
        required : true,
    },

    imageUrl : {
        type : String,
        default : "https://t3.ftcdn.net/jpg/04/72/65/40/360_F_472654072_OcOyni2TGUOiClohAhzQBuwPguXxR7Eb.jpg"
    },

    location : {
        type: String,
        required : true
    }
});

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;