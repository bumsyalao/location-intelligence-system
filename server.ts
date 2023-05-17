import express, { Request, Response } from 'express';
import userRoutes from './server/user/routes';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

const mongoose = require('mongoose');
const winston = require("winston");

dotenv.config();

const app = express();
const port = 3030;

app.use(cors());
app.use(bodyParser.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

const logger = winston.createLogger({
    // Log only if level is less than (meaning more severe) or equal to this
    level: "info",
    // Use timestamp and printf to create a standard log format
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(
            (info: any) => `${info.timestamp} ${info.level}: ${info.message}`
        )
    ),
    // Log to the console and a file
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "logs/app.log" }),
    ],
});

// MongoDB connection URL
const mongoURL = process.env.DB_URL;

// Connect to MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        logger.log("info", "Connected to MongoDB");
    })
    .catch((error: Error) => {
        logger.log("error", `Error connecting to MongoDB: ${error}`);

    });




// Set up routes and middleware here

app.use((req, res, next) => {
    // Log an info message for each incoming request
    logger.info(`Received a ${req.method} request for ${req.url}`);
    next();
});

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello World!");
})
app.use('/user', userRoutes);

// Start the server
app.listen(port, () => {
    logger.log("info", `Server is running on port ${port}!`);
});

