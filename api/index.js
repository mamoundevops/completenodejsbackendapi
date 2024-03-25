import express from "express";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// import routes
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import propertyRouter from './routes/property.route.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect('mongodb://localhost:27017/backend')
  .then(() => {
    console.log('Connected to MongoDB localy');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("Server listening on port 5000");
});


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/property', propertyRouter);



app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});