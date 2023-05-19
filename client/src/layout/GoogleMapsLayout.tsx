import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY || '';


const GoogleMapsLayout = () => {
    const [location, setLocation] = useState({ lat: 0, lng: 0 });

    const handleLocationChange = (event: any) => {
        const { lat, lng } = event.latLng.toJSON();
        setLocation({ lat, lng });
    };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
            <GoogleMap
                mapContainerStyle={{ height: '100vh', width: '80%' }}
                center={location}
                zoom={8}
                onClick={handleLocationChange}
            >
                <Marker position={location} />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapsLayout;
