import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, useJsApiLoader, Circle } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY || '';

const GoogleMapsLayout = () => {
    const selectedVehicleData = useSelector((state: RootState) => state.vehicles.selectedVehicle);
    const [location, setLocation] = useState({ lat: selectedVehicleData?.location?.lat, lng: selectedVehicleData?.location?.lng });


    const handleLocationChange = (event: any) => {
        const { lat, lng } = event.latLng.toJSON();

        setLocation({ lat, lng });
    };

    useEffect(() => {
        setLocation({ lat: selectedVehicleData?.location?.lat, lng: selectedVehicleData?.location?.lng })
    }, [selectedVehicleData])

    // const { isLoaded, loadError } = useJsApiLoader({
    //     googleMapsApiKey: GOOGLE_MAP_API_KEY,
    // });
    // const onLoad = (marker: any) => {
    //     console.log('marker: ', marker)
    // }

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY} region='AE'>
            <GoogleMap
                mapContainerStyle={{ height: '100vh', width: '100vw' }}
                center={location}
                zoom={15}
                onClick={handleLocationChange}
            >
                <Marker
                    icon={{
                        path: 'https://res.cloudinary.com/dcpfdxsly/image/upload/v1684780805/location-marker_ojsagh.png',
                        scale: 7,

                    }}
                    zIndex={1000}
                    visible={true}
                    position={location}
                />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapsLayout;
