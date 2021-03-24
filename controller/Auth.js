const jwt=require('jsonwebtoken');
const Admin=require('../models/admin');
const bcrypt=require('bcryptjs');
const admin = require('../models/admin');
exports.loginPage=(req,res,next)=>{
   return  res.render('login');
}
exports.postLogin=(req,res,next)=>{
    console.log(req.body.email);
    const token=jwt.sign({
        email:req.body.email,
    },'secrettopsecretyoursecret',{expiresIn:'1h'});
    return res.status(200).json({token:token,adminIdId:adm._id.toString()})

}