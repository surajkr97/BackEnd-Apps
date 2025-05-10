
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
    try {
        // await mongoose.connect(process.env.MONGODB_URI);
        await mongoose.connect("mongodb://localhost:27017/mySecondDB");
        console.log('MongoDB connected mySecondDb');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

module.exports = connectDB;