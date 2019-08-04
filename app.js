const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors'); 
const mongoose = require('mongoose'); 

//body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//log incomming requests
app.use(morgan('dev'));

//disable cors mechanism
app.use(cors());
//
//mongodb+srv://Nipuna123:Nipuna@logindatabase-ogpjo.mongodb.net/test
//database 
///mongoose.connect('mongodb://localhost:27017/RAD',{ useNewUrlParser: true },function(err) {
//mongodb+srv://Nipuna123:Nipuna@logindatabase-ogpjo.mongodb.net/LoginServer?retryWrites=true&w=majority
    //mongoose.connect('mongodb+srv://Nipuna123:Nipuna@logindatabase-ogpjo.mongodb.net/LoginServer',{ useNewUrlParser: true },function(err) {
        mongoose.connect('mongodb+srv://Nipuna123:Nipuna@logindatabase-ogpjo.mongodb.net/LoginServer?retryWrites=true&w=majority',{ useNewUrlParser: true },function(err) {
            if (err){
        console.log("Erroroccured while connecting to the database ! "+ err)
    }
    else{
        console.log("Database connction success")
    }
});


//routes  - user
const userRoute = require('./routes/user.js');
const userLoginRoute = require('./routes/userLogIn.js');
const userSignUpRoute = require('./routes/userSignUp.js');
const userUpdateRoute = require('./routes/userUpdate.js');
const userDeleteRoute = require('./routes/userDelete.js');

app.use('/user',       userRoute);
app.use('/userLogin',  userLoginRoute);
app.use('/userSignUp', userSignUpRoute);
app.use('/userUpdate', userUpdateRoute); 
app.use('/userDelete', userDeleteRoute); 


//error handler for routes 
app.use((req,res,next)=>{
    const err = new Error('Page not found !');
    err.status = 404 ;
    next(err);
});

//error handler general
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message : error.message
        }
    });
});





//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
module.exports = app;
