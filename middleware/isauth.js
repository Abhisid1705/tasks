const jwt=require('jsonwebtoken');
module.exports=(req,res,next)=>{
    const token=req.get('Authorization');
    let decodedToken;
    try{
        decodedToken=jwt.verify(token,'secrettopsecretyoursecret');
    }catch(err){
        const error=new Error(err);
        err.statusCode=500;
        throw error;
    }
    if(!decodedToken){
        const error=new Error(err);
       error.httpstatuscode=500;
       throw error;
    }
    next();
}