import React, { useState } from 'react';
import Vehicle from '../../types';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import VehicleForm from '../Forms/VehicleForm';
import ConfirmationCard from './ConfirmationCard';

interface VehicleCardProps {
    vehicle: Vehicle;
}


const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openEditModal = () => {
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const onClickEditVehicle = () => {
        openEditModal();
    }

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    const onClickDeleteVehicle = () => {
        openDeleteModal();
    }

    const handleCancelDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    return (
        <>
            <div className="card">
                <div className="card-icon">
                    <Button buttonType='icon' onClick={onClickEditVehicle}><AiOutlineEdit /></Button>
                    <Button buttonType='icon' onClick={onClickDeleteVehicle}><AiOutlineDelete /></Button>
                </div>
                <h4>{vehicle.name} {' '}<span className="dot" style={{ backgroundColor: `${vehicle.status === 'active' ? 'green' : 'red'}` }} /></h4>
                <span>Lat: {vehicle.location.lat} </span>
                <span>Lng: {vehicle.location.lng} </span>
            </div>

            <Modal isOpen={isEditModalOpen} onClose={closeEditModal} childComponent={<VehicleForm buttonText='Update vehicle' vehicle={vehicle} />} />
            <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} childComponent={<ConfirmationCard vehicleId={vehicle._id as any} vehicleName={vehicle.name} onCancel={handleCancelDeleteModal} />} />

        </>
    );
};

export default VehicleCard;
