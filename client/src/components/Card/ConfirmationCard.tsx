import React from 'react';
import Button from '../Button/Button';
import useDeleteVehicle from '../../hooks/useDeleteVehicle';

interface ConfirmationCardProps {
    vehicleId: any;
    vehicleName: string;
    onCancel: () => void;
}


const ConfirmationCard: React.FC<ConfirmationCardProps> = ({ vehicleId, vehicleName, onCancel }) => {
    const { deleteVehicle } = useDeleteVehicle();

    const onDeleteVehicle = () => {
        deleteVehicle(vehicleId);
    }
    return (
        <div className="card confirmation">
            <h4>Are you sure you want to delete {vehicleName}?</h4>

            <Button buttonType='primary' onClick={onDeleteVehicle}>{'Delete vehicle'}</Button>
            <Button buttonType='secondary' onClick={onCancel}>{'Cancel'}</Button>

        </div>

    );
};

export default ConfirmationCard;
