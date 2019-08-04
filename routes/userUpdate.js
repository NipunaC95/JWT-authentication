const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const jwtMiddleware = require('../middleware/jwtProtect');

router.post('/:id',jwtMiddleware,(req,res,next)=>{ 
        const id = req.params.id;     
        User.findById(id ,(error,user)=>{
                console.log('REQ',req.body);
                console.log('USER',user);
                if(!user){
                        res.send('could not load document')
                }else{
                        console.log(req.body.contactNumber);
                        user.name = req.body.name,
                        user.address = req.body.address,
                        user.telephone = req.body.telephone, 
                        user.password = req.body.password,  
                        user.email = req.body.email,  
                        user.save()
                        .then(user=>{
                                res.json(user);
                        })
                        .catch(error=>{
                                res.send('Update failed');
                        })
                }
        })
}) 





module.exports = router;

 

