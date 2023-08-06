import express, { Application, Request, Response, json } from 'express'
import { startServer } from './boot/boot';
import cors from 'cors'

const app: Application = express();
app.use(cors())
app.use(json());

app.get('/', (req:Request,res:Response) =>{
    res.send("Nice job....")
})

startServer(app);