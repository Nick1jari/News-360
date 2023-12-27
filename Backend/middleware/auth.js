const jwt=require("jsonwebtoken")
require('dotenv').config();
const User=require('../model/User')
const verifyToken=async (req,res,next)=>{
    try{
        const token=req.header('auth-token')
        const decoded=jwt.verify(token,process.env.REACT_APP_APIKEY)
        const user= await User.findOne({_id:decoded._id})
        if(!user){
            res.status(401).send(false)
        }
        req.user=user
        req.token=token
        next()
    }catch(e){
              console.log(e)
              res.status(401).send('false')
    }
}
module.exports=verifyToken