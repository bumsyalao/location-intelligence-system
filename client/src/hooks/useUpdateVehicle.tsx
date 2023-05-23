import { useState } from 'react';
import axios from 'axios';
import Vehicle from '../types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import useFetchVehicles from './useFetchVehicles';

const useUpdateVehicle = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch();
    const { fetchVehicles } = useFetchVehicles();

    const updateVehicle = async (vehicleId: string, updatedVehicle: Vehicle) => {
        setLoading(true);
        setError(null);
        dispatch({ type: 'UPDATE_VEHICLE_REQUEST' });
        try {
            const response = await axios.put(`vehicles/update/${vehicleId}`, updatedVehicle);
            dispatch({ type: 'UPDATE_VEHICLE_SUCCESS', payload: response.data });
            setLoading(false);
            fetchVehicles();
            toast.info('Successfully updated vehicle');

        } catch (err: any) {
            dispatch({ type: 'UPDATE_VEHICLE_FAILURE', error: err.message });
            setError(err.message || 'An error occurred while updating the vehicle');
            toast.error(error);

        } finally {
            setLoading(false);
        }
    };

    return { loading, error, updateVehicle };
};

export default useUpdateVehicle;
