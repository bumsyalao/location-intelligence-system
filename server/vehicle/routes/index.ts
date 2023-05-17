import { createVehicle, updateVehicle, getVehicleById, getAllVehicles, deleteVehicle } from '../controllers/vehicle.controller';
import { Router } from 'express';

const router = Router();


// Create new vehicle
router.post('/create', createVehicle);

// Update vehicle
router.put('/update/:vehicleId', updateVehicle);

//Retrieve one vehicle by id
router.get('/:vehicleId', getVehicleById);

//Retrieve all vehicles
router.get('/', getAllVehicles);

//Delete a vehicle by id
router.delete('/:vehicleId', deleteVehicle);

export default router;
