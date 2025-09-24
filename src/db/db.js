import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

async function connectDB() {
    try {
      const conn = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
      console.log(`MongoDB connected: ${conn.connection.host}`)
    } 
    catch (err) {
       console.error('MongoDB connection error:', err.message);
       throw err;
    }
}

export default connectDB;
