const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var JWT_SEACRET = 'seacret';

router.post('/',(req,res,next)=>{ 
    //creating encrypted password
    bcrypt.genSalt(10 ,(error,salt)=>{
        bcrypt.hash(req.body.password,salt,async (erro,hash)=>{
                //hash password
                var hashedPassworrd = hash;
                //save user 
                try{   
                    const user = new User({
                        name : req.body.name,
                        address : req.body.address,
                        telephone : req.body.telephone, 
                        email : req.body.email, 
                        password : hashedPassworrd,
                    });
                    
                    var newUser  = await user
                        .save()
                        .then((result) => {
                            console.log(`Account creation success ${req.body.email}`)
                            const token = jwt.sign(user.toJSON(),JWT_SEACRET, { });
                            console.log(result); 
                            res.send({token});
                            
                        }).catch((err) => {
                            console.log(err);
                        });
                    
                        

                }catch(err){
                        console.log('error occured while saving a user ',err);
                        res.sendStatus(400);
                }
        });
    });
});


module.exports = router;
