import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY || '';



const GoogleMapsLayout = () => {
    const selectedVehicleData = useSelector((state: RootState) => state.vehicles.selectedVehicle);
    const [location, setLocation] = useState({ lat: selectedVehicleData?.location?.lat, lng: selectedVehicleData?.location?.lng });

    // const iconOptions = {
    //     url: 'https://res.cloudinary.com/dcpfdxsly/image/upload/v1684780805/location-marker_ojsagh.png',
    //     scaledSize: isLoaded ? new window.google.maps.Size(32, 32) : undefined,
    // };

    const handleLocationChange = (event: any) => {
        const { lat, lng } = event.latLng.toJSON();

        setLocation({ lat, lng });
    };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY} region='AE'>
            <GoogleMap
                mapContainerStyle={{ height: '100vh', width: '100vw' }}
                center={location}
                zoom={12}
                onClick={handleLocationChange}
            >
                <Marker position={location}
                // icon={iconOptions}
                />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapsLayout;
