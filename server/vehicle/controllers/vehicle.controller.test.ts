import { createVehicle } from "./vehicle.controller";
import Vehicle from '../models/vehicle.model';
import mongoose from 'mongoose';

describe('createVehicle', () => {
    beforeAll(async () => {
        // Connect to MongoDB
        await mongoose.connect('mongodb://localhost:27017/testdb', {
        });
    });

    afterAll(async () => {
        // Disconnect from MongoDB
        await mongoose.connection.close();
    });


    it('should create a new vehicle', async () => {
        const req = {
            body: {
                name: 'Test Vehicle',
                location: 'Test Location',
                status: 'Test Status',
            },
        } as any;
        const res: any = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        } as unknown as Response;

        await createVehicle(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalled();

        const savedVehicle = await Vehicle.findOne({ name: 'Test Vehicle' });
        expect(savedVehicle).toBeDefined();
    });
});

