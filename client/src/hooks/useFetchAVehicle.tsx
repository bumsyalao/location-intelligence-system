import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Vehicle from '../types';


const useFetchAVehicle = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [vehicle, setVehicle] = useState<Vehicle>();
    const dispatch = useDispatch();

    const fetchVehicle = async (vehicleId: Vehicle['_id']) => {

        try {
            const response = await axios.get(`/vehicles/${vehicleId}`);
            const vehiclesData = response.data;
            setVehicle(vehiclesData);
            dispatch({ type: 'FETCH_A_VEHICLE_SUCCESS', payload: vehiclesData });

            setLoading(false);
        } catch (err: any) {
            setError(err.message);
            dispatch({ type: 'FETCH_A_VEHICLE_FAILURE', error: error });

            setLoading(false);
        }
        finally {
            setLoading(false);
        }
    };


    return { loading, error, vehicle, fetchVehicle };
};

export default useFetchAVehicle;
