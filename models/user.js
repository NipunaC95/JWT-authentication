var mongoose = require('mongoose');//import mongoose 
mongoose.Promise = global.Promise; //setting promisses 

//defining schema
const userSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true, 
    },

    telephone:{
        type: String,
        required: true, 
    },

    address:{
        type: String, 
    },

    email: {
        type: String,
        required: true, 
    },

    password: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model("User", userSchema);