import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors'


import { userController } from './routes/users'
import { todoController } from './routes/todos'


const app = express();

app.listen(2200, function()
{
    console.log('runnin on 2200');
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/todo', todoController);
app.use('/users', userController);



module.exports = app;
