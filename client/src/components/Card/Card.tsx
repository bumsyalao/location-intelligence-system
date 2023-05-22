import React from 'react';
import Vehicle from '../../types';

interface CardProps {
    vehicle: Vehicle;
}

const Card: React.FC<CardProps> = ({ vehicle }) => {
    return (
        <div className="card">
            <h4>{vehicle.name} <span className="dot" style={{ backgroundColor: `${vehicle.status === 'active' ? 'green' : 'red'}` }} /></h4>
            <span>Lat: {vehicle.location.lat} </span>
            <span>Lng: {vehicle.location.lng} </span>
        </div>
    );
};

export default Card;
