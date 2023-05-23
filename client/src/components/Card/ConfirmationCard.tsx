import React from 'react';
import Button from '../Button/Button';
import useDeleteVehicle from '../../hooks/useDeleteVehicle';

interface ConfirmationCardProps {
    vehicleId: any;
    onCancel: () => void;
}


const ConfirmationCard: React.FC<ConfirmationCardProps> = ({ vehicleId, onCancel }) => {
    const { deleteVehicle } = useDeleteVehicle();

    const onDeleteVehicle = () => {
        deleteVehicle(vehicleId);
    }
    return (
        <div className="card confirmation">
            <h4>Are you sure you want to delete this vehicle?</h4>

            <Button buttonType='primary' onClick={onDeleteVehicle}>{'Delete vehicle'}</Button>
            <Button buttonType='secondary' onClick={onCancel}>{'Cancel'}</Button>

        </div>

    );
};

export default ConfirmationCard;
