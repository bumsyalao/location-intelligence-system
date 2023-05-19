import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY || '';


const GoogleMapsLayout = () => {
    const vehichlesData = useSelector((state: RootState) => state.vehicles?.vehicles);
    const [selectedVehicle, setSelectedVehicle] = useState({ ...vehichlesData[0] });
    const [location, setLocation] = useState({ lat: selectedVehicle?.location?.lat, lng: selectedVehicle?.location?.lng });


    const handleLocationChange = (event: any) => {
        const { lat, lng } = event.latLng.toJSON();

        setLocation({ lat, lng });
    };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY} region='AE'>
            <GoogleMap
                mapContainerStyle={{ height: '100vh', width: '100vw' }}
                center={selectedVehicle.location}
                zoom={12}
                onClick={handleLocationChange}
            >
                <Marker position={selectedVehicle.location} />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapsLayout;
