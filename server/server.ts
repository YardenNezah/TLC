import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connection from './db/connection.js';
import volunteeringRouter from './routes/volunteeringRoute.js';
import associationRouter from './routes/associationsRoute.js';
import founderRouter from './routes/foundersRoute.js';
import authRouter from './routes/authRoute.js';

dotenv.config();
connection
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/associations', associationRouter)
//app.use('/associations/:filter/:page', associationRouter)
app.use('/founders', founderRouter)
app.use('/volunteering', volunteeringRouter)
app.use('/auth', authRouter)

app.listen(port, () => console.log(`server is listening on: ${port}`));