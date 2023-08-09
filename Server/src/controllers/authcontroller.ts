import { Request, Response } from "express";
import { Connection } from "../helpers/dbhelpers";
import {v4 as uuid} from "uuid";
import { LoginSchema, RegisterSchema } from "../schemas/auth.schemas";
import bcrypt from "bcrypt"
import { LoginRequest, RegisterRequest, User } from "../types/user.types";
import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();

const db = new Connection();

export const RegisterUser = async (req: RegisterRequest, res: Response) => {
    try{
        const userID = uuid()
        let {username, password} = req.body;
        const {error, value} = RegisterSchema.validate(req.body)
        if (error){
            return res.status(500).json({error: error.details[0].message});
        }
        const {recordset} = await db.executeProcedure("GetUser", {username});
        if(recordset.length > 0) {
            return res.json({error: "Account already exist"})

        }
        password = await bcrypt.hash(password, 10);
        await db.executeProcedure("CreateUser" , {
            userID,username,password
        });
        res.json({message: "Account Created Successful"})

    } catch (error: any){
        console.log(error);
        res.json({error: error.message});
    }
};

export const LoginUser = async (req: LoginRequest, res:Response) => {
    try {
        let {username, password} = req.body
        const {error, value } = LoginSchema.validate(req.body);
        if (error){
            return res.status(500).json({error: error.details[0].message});

        }
        const user: User[] = ( await db.executeProcedure("GetUser", {username})).recordset;
        if (!user[0]){
            return res.json({error: "Account doent exist"})
        }
        const validpassword = await bcrypt.compare(password, user[0].password);
        if (!validpassword){
            return res.json({error: "wrong password"});
        }
        const payload = user.map((item) => {
            const {password, ...rest} = item;
            return rest
        });
        const token = jwt.sign(payload[0], process.env.JWT_KEY as string, {
            expiresIn: "3600s"
        });
        res.status(200).json({message: "Logged in succesful", token});
        
    } catch (error: any) {
        res.json({error: error.message});
        
    }
}