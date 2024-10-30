import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { getName, postName } from './functions'

const app: Application = express()
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

dotenv.config();

const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/name', (req, res) => {
    getName(req, res)
})

app.post('/api/name', (req, res) => {
    postName(req, res)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
