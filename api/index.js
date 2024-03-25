import express from "express";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

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
