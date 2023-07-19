import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import VehicleCard from '../components/Card/VehicleCard';
import Vehicle from '../types';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY || '';



const GoogleMapsLayout = () => {
    const vehicleData = useSelector((state: RootState) => state.vehicles.vehicles);
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
    const [mapCenter, setMapCenter] = useState({ lat: 25.2222708, lng: 55.3778314 });

    const handleLocationChange = (event: any) => {
        const { lat, lng } = event.latLng.toJSON();
    };

    const handleMarkerClick = (vehicle: Vehicle) => {
        setSelectedVehicle(vehicle);
    };

    const handleCloseInfoWindow = () => {
        setSelectedVehicle(null);
    };

    useEffect(() => {
        if (vehicleData && vehicleData.length > 0) {
            const latSum = vehicleData.reduce((total, vehicle) => total + vehicle.location.lat, 0);
            const lngSum = vehicleData.reduce((total, vehicle) => total + vehicle.location.lng, 0);
            const avgLat = latSum / vehicleData.length;
            const avgLng = lngSum / vehicleData.length;
            setMapCenter({ lat: avgLat, lng: avgLng });
        }
    }, [vehicleData]);
    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY} region='AE'>
            <GoogleMap
                mapContainerStyle={{ height: '100vh', width: '100vw' }}
                center={mapCenter}
                zoom={10}
                onClick={handleLocationChange}
            >
                {vehicleData.length > 0 &&
                    vehicleData.map((vehicle: Vehicle) => (
                        <MarkerF
                            key={vehicle.name + vehicle.location.lng}
                            position={{ lat: vehicle.location.lat, lng: vehicle.location.lng }}
                            onClick={() => handleMarkerClick(vehicle)}
                        />
                    ))}
                {selectedVehicle && (
                    <InfoWindow
                        position={{ lat: selectedVehicle.location.lat, lng: selectedVehicle.location.lng }}
                        onCloseClick={handleCloseInfoWindow}
                    >
                        <div className='card-modal'>
                            <VehicleCard vehicle={selectedVehicle} />
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapsLayout;
