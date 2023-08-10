
import {Router} from 'express'
import { NewTask } from '../controllers/todocontroller'
import { VerifyToken } from '../middlewares/verify.token'

export const taskRouter = Router()

taskRouter.post("/task",VerifyToken, NewTask)