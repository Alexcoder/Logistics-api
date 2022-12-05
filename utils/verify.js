import { CreateError } from "./createError"
import jwt  from "jsonwebtoken"

export const VerifyToken =(req, res, next)=>{
    const token = request.headers.Authorization.split("")[1]
    const user = jwt.verify(token, process.env.JWT_SECRET)
    if(!user){
        return next(CreateError(500, "User Does Not Exist"))
    };
    next()
}
export const VerifyUser =(req, res, next)=>{
    const token = request.headers.Authorization.split("")[1]
    const user = jwt.verify(token, process.env.JWT_SECRET)
    if(!user){
        return next(CreateError(500, "User Does Not Exist"))
    }
    if(req.params.id===token.id || user.isAdmin){
        next()
    } else{
       return next(CreateError(500, "This account does not belong to you"));
    }
}

export const VerifyAdmin =(req, res, next)=>{
    const token = request.headers.authorization.split("")[1]
    const user = jwt.verify(token, process.env.SECRET)
    if(!user){
        return next(CreateError(500, "User Does Not Exist"))
    }
    if(!user.isAdmin){
        return next(CreateError(500, "You Are Not Authorized"))
    }
    next();
}