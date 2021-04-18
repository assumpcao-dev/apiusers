import'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import {usersRouter} from './routes/user.routes';
import AppError from './shared/errors/AppError';


const app = express();

app.use(usersRouter)


app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
},
);

app.listen(process.env.PORT, () => console.log('🚀 Running on port: ' + process.env.PORT))