import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY || '';
const GoogleMapsScreen = () => {
    const [location, setLocation] = useState({ lat: 0, lng: 0 });

    const handleLocationChange = (event: any) => {
        const { lat, lng } = event.latLng.toJSON();
        setLocation({ lat, lng });
    };

    return (
        <LoadScript googleMapsApiKey={API_KEY}>
            <GoogleMap
                mapContainerStyle={{ height: '400px', width: '100%' }}
                center={location}
                zoom={8}
                onClick={handleLocationChange}
            >
                <Marker position={location} />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapsScreen;
