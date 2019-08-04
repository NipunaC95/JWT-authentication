const jwt = require('jsonwebtoken');
var JWT_SEACRET = 'seacret';

module.exports = (req,res,next)=>{
    const bearerHeader = req.header('Authorization');
    if(typeof  bearerHeader  !== 'undefined'){ 
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[0];
        jwt.verify( bearerToken ,JWT_SEACRET , (err , authData)=>{
                if(err){
                        console.log('error' , err);
                        res.sendStatus(403);
                }else{
                        req.userData = authData;
                        next();  
                }
        }); 

    }else{  console.log('Header is not defined !');
            res.sendStatus(403);
    }
}