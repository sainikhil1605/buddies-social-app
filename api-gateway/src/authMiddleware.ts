import { NextFunction, Request, Response } from "express";
const jwt=require('jsonwebtoken');  
interface AuthenticatedRequest extends Request {
    user:any
}

const authMiddleware=async(req:AuthenticatedRequest,res:Response,next:NextFunction)=>{
    console.log(req.path);
    if(req.path==="/signup" || req.path==="/login"){
       return next();
    }
    const token=req.header('Authorization');
    if(!token){
        return res.status(401).send({
            code:401,
            status:"Error",
            message:"Unauthorized",
            data:null
        });
    }
    else{
        console.log(token);
        const parsedToken=token.split(' ')[1];
        const user = await jwt.verify(parsedToken, process.env.JWT_SECRET);
        
        if (!user) {
          return res.status(401).json({
            error: 'Unauthorized request',
          });
        }
        req.user = user;
        console.log(req.user)
        next();
    }
};


module.exports = authMiddleware;