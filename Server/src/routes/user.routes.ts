import { Router } from "express"
import { LoginUser, RegisterUser } from "../controllers/authcontroller"

export const userRouter = Router()

userRouter.post('/signup', RegisterUser)
userRouter.post('/login', LoginUser)