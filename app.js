import express from 'express';
import tasks from './routes/tasks.js';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());


// Routes
app.use('/api/v1/tasks', tasks)

app.listen(port, () => console.log(`Server is running on port ${port}`));