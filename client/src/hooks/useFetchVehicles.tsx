import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Vehicle from '../types';


const useFetchVehicles = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchVehicles = async () => {
            dispatch({ type: 'FETCH_VEHICLES_REQUEST' });

            try {
                const response = await axios.get('/vehicles');
                const vehiclesData = response.data;
                setVehicles(vehiclesData);
                dispatch({ type: 'FETCH_VEHICLES_SUCCESS', payload: vehiclesData });

                setLoading(false);
            } catch (err: any) {
                setError(err.message);
                dispatch({ type: 'FETCH_VEHICLES_FAILURE', error: error });

                setLoading(false);
            }
        };

        fetchVehicles();
    }, []);

    return { loading, error, vehicles };
};

export default useFetchVehicles;
