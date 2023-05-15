import express, { Request, Response } from 'express';
import userRoutes from './server/user/routes';
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3030;


// MongoDB connection URL
const mongoURL = process.env.DB_URL;

// Connect to MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error: Error) => {
        console.error('Error connecting to MongoDB:', error);
    });



console.log('Connected to MongoDB');

// Set up routes and middleware here
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello World!");
})
app.use('/user', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

