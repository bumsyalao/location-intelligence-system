import { useState, useEffect } from 'react';
import axios from 'axios';
import Vehicle from '../types';
import { useDispatch } from 'react-redux';



const useSearchVehicle = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const dispatch = useDispatch();

    const searchVehicle = async (searchTerm: string) => {
        setLoading(true);
        setError(null);
        setVehicles([]);
        dispatch({ type: 'FETCH_VEHICLES_REQUEST' });
        try {
            const response = await axios.post('https://location-intelligence-system-e41499490cc2.herokuapp.com/vehicles/search', { query: searchTerm });
            const vehiclesData = response.data;

            setVehicles(response.data);
            setLoading(false)
            dispatch({ type: 'FETCH_VEHICLES_SUCCESS', payload: vehiclesData });

        } catch (err) {
            setError('Failed to search for vehicles');
            dispatch({ type: 'FETCH_VEHICLES_FAILURE', error: error });

        } finally {
            setLoading(false);
        }
    };

    return { loading, error, vehicles, searchVehicle };
};

export default useSearchVehicle;
