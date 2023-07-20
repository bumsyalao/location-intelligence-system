import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import winston from "winston";
import userRoutes from './server/user/routes';
import vehicleRoutes from './server/vehicle/routes';

const mongoose = require('mongoose');

dotenv.config();

const app = express();
const port = process.env.PORT || 3030;

app.use(cors());
app.use(bodyParser.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

export const logger = winston.createLogger({
    // Log only if level is less than (meaning more severe) or equal to this
    level: "info",
    // Use timestamp and printf to create a standard log format
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(
            (info: any) => `${info.timestamp} ${info.level}: ${info.message}`
        )
    ),
    transports: [
        new winston.transports.Console()
    ]
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





app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Welcome to LIS API!");
})
app.use('/user', userRoutes);
app.use('/vehicles', vehicleRoutes);

// Start the server
app.listen(port, () => {
    logger.log("info", `Server is running on port ${port}!`);
});

