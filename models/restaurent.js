
var mongoose = require('mongoose');//import mongoose 
mongoose.Promise = global.Promise; //setting promisses 

const  restaurentSchema = new  mongoose.Schema({ 
    
    name : {
            type :String,
            required: true
    },
    
    Quotes : {
            type :String,
            required: true
    },

    rating : {
        type :Number,
        required: true
    },

    /*
    images :{
        type :[String], 
    },*/
    
    contactNumbers: {
        //type :[String],
        type :String,
        required: false
    },
});

module.exports = mongoose.model("Restaurent", restaurentSchema);