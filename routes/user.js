const express = require('express');
const router = express.Router();
const User= require('../models/user.js');
const jwtMiddleware = require('../middleware/jwtProtect');

router.get('/:id',jwtMiddleware,(req,res,next)=>{ 
    console.log("Got into router ")
    User
    .findById(req.params.id)
    .then((doc) => {
        res.json(doc);
    }).catch((err) => {
        console.log(err);
    }); 
}); 


module.exports = router;