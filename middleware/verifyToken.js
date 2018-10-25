
const jwt = require('jsonwebtoken');




module.exports = (req,res,next)=>{
    const token= req.header['x-access-token'] || req.body.token || req.query.token

    if(token){
        jwt.verify(token,req.app.get('api_secret_key'),(err,decoded)=>{
            if(err){
                res.json({
                    status : false,
                    message: 'Failed to token authtenticate'
                })
            }
            else{
                req.decoded = decoded
                console.log(decoded);
                next();  // everything is fine you can route
            }
        })
    }
    else{
        res.json({
            status : false,
            message : 'No token provided.'
        })
    }


};