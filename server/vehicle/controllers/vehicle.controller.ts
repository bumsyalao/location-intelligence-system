import { Request, Response } from 'express';
import Vehicle from '../models/vehicle.model';

// Create a new vehicle
export const createVehicle = async (req: Request, res: Response) => {
    try {
        const { name, location, status } = req.body;

        // Check if a vehicle with the same fields already exists
        const existingVehicle = await Vehicle.findOne({
            name,
            status,
            location: { lat: location.lat, lng: location.lng }
        });
        if (existingVehicle) {
            return res.status(409).json({ error: 'Vehicle with the same fields already exists' });
        }

        const newVehicle = new Vehicle({
            name,
            location,
            status,
        });

        const savedVehicle = await newVehicle.save();

        res.status(201).json(savedVehicle);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create a new vehicle' });
    }
};


// Update a vehicle
export const updateVehicle = async (req: Request, res: Response) => {
    try {
        const { vehicleId } = req.params;
        const { name, location, status } = req.body;

        const updatedVehicle = await Vehicle.findByIdAndUpdate(

            vehicleId,
            {
                name,
                location,
                status,
            },
            { new: true }
        );

        if (!updatedVehicle) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }

        res.json(updatedVehicle);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the vehicle' });
    }
};

// Get a single vehicle by ID
export const getVehicleById = async (req: Request, res: Response) => {
    try {
        const { vehicleId } = req.params;

        const vehicle = await Vehicle.findById(vehicleId);

        if (!vehicle) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }

        res.json(vehicle);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the vehicle' });
    }
};

// Get all vehicles
export const getAllVehicles = async (req: Request, res: Response) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Delete a vehicle
export const deleteVehicle = async (req: Request, res: Response) => {
    try {
        const { vehicleId } = req.params;

        const deletedVehicle = await Vehicle.findByIdAndDelete(vehicleId);

        if (!deletedVehicle) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }

        res.json({ message: 'Vehicle deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the vehicle' });
    }
};

// search vehicles

export const searchVehicle = async (req: Request, res: Response) => {
    const cacheKey = req.url + req.body.query;
    try {
        const { query } = req.body;

        // Use a regular expression to perform a case-insensitive search
        const regex = new RegExp(query, 'i');

        // Search for vehicles that match the query
        const vehicles = await Vehicle.find({ $or: [{ name: regex }, { location: regex }, { status: regex }] });

        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ error: 'Failed to search for vehicles' });
    }
};