import { Request, Response } from "express";
import { Connection } from "../helpers/dbhelpers";
import {v4 as uuid} from "uuid";
import { RegisterSchema } from "../schemas/auth.schemas";
import bcrypt from "bcrypt"
import { RegisterRequest } from "../types/user.types";

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