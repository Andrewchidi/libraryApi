import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRoutes from './routes/user.routes.js';
import bookRoutes from './routes/books.routes.js';
import borrowRoutes from './routes/borrow.routes.js';
dotenv.config();


const app = express();
const port = process.env.PORT||3000;

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/borrows', borrowRoutes);



mongoose.connect(process.env.DATABASE_URL)
  .then(()=> console.log("mongoDB connected"))
  .catch((err)=> console.log("mongoDB connection error:", err));


app.listen(port, ()=>{
  console.log(`server is running on port ${port}`);
})

