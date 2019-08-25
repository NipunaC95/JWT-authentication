const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var JWT_SEACRET = 'seacret';

router.post('/',(req,res,next)=>{ 

        User.countDocuments({email :req.body.email}, function (err, count){ 
                if(count>0){
                        User.findOne({email :req.body.email},(err,user)=>{
                        if(user){ 
                                bcrypt.compare(req.body.password,user.password,(error ,isMatch)=>{
                                        if(error){
                                                console.log(`Error occured ${error}`);
                                        }else{ 
                                                if(isMatch){     
                                                        console.log(`Authentication success for : ${req.body.email}`)
                                                        const token = jwt.sign(user.toJSON(),JWT_SEACRET, { });
                                                        res.send({token});
                                                }else{  
                                                        console.log("Not matching");
                                                        res.sendStatus(400);
                                                }
                                        }
                                });
                        }
                        
                        }); 
                }else{
                        console.log(`Given credentials are not matching for : '${req.body.email}' , '${req.body.password}'`);
                        res.send('Given credentials are not matching');
                }
            });
       
});


module.exports = router;
