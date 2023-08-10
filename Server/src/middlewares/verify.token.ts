
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import { UserInfo } from '../types/user.types';
import { NextFunction, Request, Response } from 'express';
dotenv.config();

const {JWT_KEY} = process.env;

interface Extended extends Request {
    user?: UserInfo;
}

export const VerifyToken = (
    req: Extended,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers["token"] as string;
    console.log(token);
    try{
        if(!token){
            return res.status(401).json({message: "Unauthorized"})
        }
        const decoded = jwt.verify(token, JWT_KEY!) as UserInfo;
        req.user = decoded;
    }catch (error: any) {
        return  res.json({error: error.message});
    }
    next();
}