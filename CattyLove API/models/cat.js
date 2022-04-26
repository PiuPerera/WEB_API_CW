const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
        minlength : 3,
        maxlength : 20
    },
    gender : {
        type : String,
        required : true,
        enum : ["Male", "Female"]
    },
    age : {
        type : Number,
        required : true,
    },
    color : String,
    description : {
        type : String,
        maxlength : 200
    },
    likeCount : Number,
    unlikeCount : Number,
    imageUrl : {
        type: String,
        required : true,
        default : "https://t3.ftcdn.net/jpg/04/72/65/40/360_F_472654072_OcOyni2TGUOiClohAhzQBuwPguXxR7Eb.jpg"
    },
    contactNo : {
        type : Number,
        required : true,
    },
    location : {
        type: String,
        required : true
    }
});

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;