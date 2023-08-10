import joi from 'joi'
import { Task } from '../types/task.types'

export const TaskSchema = joi.object<Task>({
    name: joi.string().required(),
    // date: joi.string().required(),
    status: joi.string().required(),
})