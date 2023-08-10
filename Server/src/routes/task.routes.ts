
import {Router} from 'express'
import { NewTask } from '../controllers/todocontroller'

export const taskRouter = Router()

taskRouter.post("/task", NewTask)