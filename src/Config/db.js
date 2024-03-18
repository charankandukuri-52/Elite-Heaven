// db.js
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_DB_URL;
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(process.env.DB_NAME);

        return db;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
