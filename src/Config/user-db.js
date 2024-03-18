import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const connectUserDB = async () => {
    try {
        const uri = process.env.MONGO_DB_URL;
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await client.connect();


        const db = client.db(process.env.DB_NAME); 

        
        return db;
    } catch (error) {
        console.error('User DB connection error:', error);
        process.exit(1);
    }
};

export default connectUserDB;
