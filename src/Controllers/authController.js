import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/user.js';
import connectUserDB from '../Config/user-db.js';

const saltRounds = 10;

export const getUserData = async (req, res) => {
    try {
        const db = await connectUserDB();
        const collection = db.collection(process.env.User_Coll_Name);
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const registerUser = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        if (!username || !password || !role ) {
            return res.status(400).json({ message: 'Missing username, password, or role' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Connect to the database and insert new user
        const db = await connectUserDB();
        const collection = db.collection(process.env.User_Coll_Name);
      
        const newUser = new User({ username, password: hashedPassword, role });
        await collection.insertOne(newUser);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Connect to the database
        const db = await connectUserDB();

        // Retrieve the user from the database
        const user = await db.collection(process.env.User_Coll_Name).findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
       
        // Generate JWT token
        const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET);

        // Send token in response
        res.json({ 
            username: user.username,
            role: user.role
         });
        return res;
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
