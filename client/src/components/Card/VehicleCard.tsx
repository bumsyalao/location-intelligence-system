import React, { useState, useEffect } from 'react';
import Vehicle from '../../types';

interface VehicleCardProps {
    vehicle: Vehicle;
}
const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY || '';

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
    const [locationName, setLocationName] = useState<string>('');

    useEffect(() => {
        // Fetch the location name from Google Maps API using latitude and longitude
        const fetchLocationName = async () => {
            try {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${vehicle.location.lat},${vehicle.location.lng}&key=${GOOGLE_MAP_API_KEY}`
                );

                if (response.ok) {
                    const data = await response.json();
                    const address =
                        data.results[0]?.formatted_address || 'Location not found';
                    setLocationName(address);
                } else {
                    setLocationName('Location not found');
                }
            } catch (error) {
                setLocationName('Location not found');
            }
        };

        fetchLocationName();
    }, [vehicle.location.lat, vehicle.location.lng]);

    return (
        <>
            <div className='card'>
                <h4>
                    {vehicle.name} <span className='dot' style={{ backgroundColor: `${vehicle.status === 'active' ? 'green' : 'red'}` }} />
                </h4>
                <span>Lat: {vehicle.location.lat} </span>
                <span>Lng: {vehicle.location.lng} </span>
                <p>Address: {locationName}</p>
            </div>
        </>
    );
};

export default VehicleCard;
