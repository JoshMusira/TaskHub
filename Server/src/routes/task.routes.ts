
import {Router} from 'express'
import { GetTask, NewTask } from '../controllers/todocontroller'
import { VerifyToken } from '../middlewares/verify.token'

export const taskRouter = Router()

taskRouter.post("/task",VerifyToken, NewTask);
taskRouter.get('/task', VerifyToken, GetTask);