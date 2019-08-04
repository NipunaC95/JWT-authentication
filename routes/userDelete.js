const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const jwtMiddleware = require('../middleware/jwtProtect');

router.post('/:id',jwtMiddleware,(req,res,next)=>{ 
        const id = req.params.id;
        console.log(id)
                User.findByIdAndDelete({_id : id})
                .then((doc) => {
                    res.json({doc});
                }).catch((err) => {
                    console.log(err);
                });
        })

module.exports = router;





