import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Vehicle from '../types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useCreateVehicle = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const dispatch = useDispatch();

    const createVehicle = async (data: Vehicle) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        dispatch({ type: 'CREATE_VEHICLE_REQUEST' });
        try {
            // Make the API call to create a vehicle
            await axios.post('https://location-intelligence-system-e41499490cc2.herokuapp.com/vehicles/create', data);
            // Dispatch the action to update the Redux store
            dispatch({ type: 'CREATE_VEHICLE_SUCCESS', payload: data });
            setSuccess(true);
            toast.info('Successfully created vehicle');
        } catch (err: any) {
            dispatch({ type: 'CREATE_VEHICLE_FAILURE', error: err.message });
            setError(err.message || 'An error occurred');
            toast.error(error);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, success, createVehicle };
};

export default useCreateVehicle;
