import { useState } from 'react';
import axios from 'axios';

interface VehicleData {
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };
    status: string;
}

const useCreateVehicle = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const createVehicle = async (data: VehicleData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Make the API call to create a vehicle
            await axios.post('/vehicles/create', data);

            setSuccess(true);
        } catch (err: any) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, success, createVehicle };
};

export default useCreateVehicle;
