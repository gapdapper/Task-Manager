import express from 'express';
import tasks from './routes/tasks.js';
import { connectDB } from './db/connect.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    } catch (error) {
        console.error(error);
    }
}

// Middleware
app.use(express.json());


// Routes
app.use('/api/v1/tasks', tasks)

start();