import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import useFetchVehicles from './useFetchVehicles';

const useDeleteVehicle = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { fetchVehicles } = useFetchVehicles();
    const dispatch = useDispatch();

    const deleteVehicle = async (vehicleId: string) => {
        setLoading(true);
        setError(null);

        try {
            await axios.delete(`https://location-intelligence-system-e41499490cc2.herokuapp.com/vehicles/${vehicleId}`);
            fetchVehicles(); // Fetch vehicles again after successful deletion
            toast.info('Successfully deleted vehicle');
        } catch (err: any) {
            setError(err.message || 'An error occurred while deleting the vehicle');
        } finally {
            setLoading(false);
            toast.error(error);
        }
    };

    return { loading, error, deleteVehicle };
};

export default useDeleteVehicle;
