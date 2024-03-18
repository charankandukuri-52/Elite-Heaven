// controllers/hotelController.js
import connectDB from '../Config/db.js';

export const getHotelData = async (req, res) => {
    try {
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error fetching hotel data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
