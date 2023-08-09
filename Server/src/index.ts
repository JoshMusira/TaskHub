import express, { Application, Request, Response, json } from 'express'
import { startServer } from './boot/boot';
import cors from 'cors'
import { userRouter } from './routes/user.routes';

const app: Application = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(json());

app.get('/', (req:Request,res:Response) =>{
    res.send("Nice job.....")
})

app.use(userRouter)

startServer(app);