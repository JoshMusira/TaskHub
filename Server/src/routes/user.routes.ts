import { Router } from "express"
import { RegisterUser } from "../controllers/authcontroller"

export const userRouter = Router()

userRouter.post('/signup', RegisterUser)