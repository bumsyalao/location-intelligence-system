import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Vehicle from '../types';


const useFetchVehicles = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const dispatch = useDispatch();


    const fetchVehicles = async () => {
        dispatch({ type: 'FETCH_VEHICLES_REQUEST' });

        try {
            const response = await axios.get('https://location-intelligence-system-e41499490cc2.herokuapp.com/vehicles');
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



    useEffect(() => {
        fetchVehicles();
    }, []);

    return { loading, error, vehicles, fetchVehicles };
};

export default useFetchVehicles;
