// app.js
import express from 'express';
import connectDB from './src/Config/db.js'; 
import dotenv from 'dotenv'
dotenv.config({
    path:'./.env'
})

const app = express();


await connectDB();



app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});
