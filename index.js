
import express from 'express';
import connectDB from './src/Config/db.js'; 
import dotenv from 'dotenv'
import hotelRoutes from './src/Routes/hotelRoutes.js'
dotenv.config({
    path:'./.env'
})
const app = express(express.json());
await connectDB();
app.use('/api', hotelRoutes);
app.get('/', (req, res) => {
    res.send('Elite Heaven Welcomes you...');
});

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});
