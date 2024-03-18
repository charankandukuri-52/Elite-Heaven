import express from 'express';
import connectDB from './src/Config/db.js'; 
import connectUserDB from './src/Config/user-db.js';
import dotenv from 'dotenv'
import hotelRoutes from './src/Routes/hotelRoutes.js'
import authRoutes from './src/Routes/authRoutes.js';
import bodyParser from 'body-parser';
dotenv.config({
    path:'./.env'
})

const app = express(express.json());
// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// Connect to MongoDB
await connectDB();
await connectUserDB()

// Use routes
app.use('/api', hotelRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Elite Heaven Welcomes you...');
});

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});
