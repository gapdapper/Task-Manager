import express from 'express';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());


// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));