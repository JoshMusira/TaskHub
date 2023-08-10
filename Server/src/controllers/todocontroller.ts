import { Request, Response } from "express";
import { Connection } from "../helpers/dbhelpers";
import {v4 as uuid} from 'uuid';
import { TaskRequest } from "../types/task.types";
import { TaskSchema } from "../schemas/task.schema";

const db = new Connection();

export const NewTask = ( req: TaskRequest, res: Response) => {
    try{
        const id = uuid();
        const {userID } = req.user!
        const {name, date, status} = req.body!
        const {error, value} = TaskSchema.validate(req.body);
        if (error){
            console.log(error);
            return res.json({error: error.details[0].message});
        }
        db.executeProcedure("NewTask", {
            id, userID, name, date, status
        });
        res.status(200).json({message: "Task Created"});

    }catch (error){
        res.json({error: error});
    }
}