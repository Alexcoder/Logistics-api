import User from "../model/auth.js";
import jwt  from "jsonwebtoken";
import bcrypt from 'bcryptjs'
import {CreateError} from '../utils/createError.js'

export const SignIn= async(req, res, next)=>{
    
    try{
        const existingUser =  await User.findOne({email: req.body.email});
        if(!existingUser) return next(CreateError(500, "User does not exist"));
        
        const isPasswordCorrect = await bcrypt.compare(req.body.password, existingUser.password)
        if(!isPasswordCorrect) return next(CreateError(500, "Wrong Username or password"));
        const token = jwt.sign({id:existingUser._id, isAdmin:existingUser.isAdmin}, process.env.JWT_SECRET, {expiresIn: "3d"})
        res.status(200).json(
            {
            id:existingUser._id, 
            email: existingUser.email, 
            firstName:existingUser.firstName, 
            lastName:existingUser.lastName, 
            isAdmin:existingUser.isAdmin,
            token
            }
            )
    }catch(err){
        next(CreateError(500, "Something went wrong"))
    }
}

export const SignUp= async(req, res, next)=>{

    try{
        const existingUser =  await User.findOne({email: req.body.email});
        if(existingUser) return next(CreateError(500, "User already exist"));
        if(req.body.email.length< 10) return next(CreateError(500, "Email likely doesnt exist"));
        if(req.body.password.length <3) return next(CreateError(501, "Password length must be minimum 3 characters"));
        if(req.body.password !== req.body.confirmPassword) return next(CreateError(505, "Password Mismatch"))
        
        const salt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = {
            email: req.body.email,
            firstName: req.body.firstName, 
            lastName: req.body.lastName, 
            password: hashedPassword, 
            bio: req.body.bio,
            isAdmin: req.body.isAdmin
        }
        const savedUser = await new User(newUser).save()
        const token = jwt.sign({id:savedUser._id, isAdmin:savedUser.isAdmin}, process.env.JWT_SECRET, {expiresIn: "3d"})
        res.status(200).json(
            {
            id:savedUser._id, 
            email: savedUser.email, 
            firstName:savedUser.firstName, 
            lastName:savedUser.lastName, 
            isAdmin:savedUser.isAdmin,
            token
            }
            )

    }catch(err){
        next(CreateError(500, "Something went wrong"))
    }
}

