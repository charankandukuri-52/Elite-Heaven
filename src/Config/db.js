import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config({
    path: '../../.env'
})
const connectDB = async () => {
    try {
       
        const mongoURI = process.env.MONGO_DB_URL;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(mongoURI, options);

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('MongoDB connection error:', error);
        process.exit(1); 
    }
};

export default connectDB;
