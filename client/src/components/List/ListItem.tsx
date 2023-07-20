import React, { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import VehicleForm from '../Forms/VehicleForm';
import ConfirmationCard from '../Card/ConfirmationCard';
import Vehicle from '../../types';

interface ListItemProps {
    color: string;
    text: string;
    vehicle: Vehicle;

}

const ListItem: React.FC<ListItemProps> = ({ color, text, vehicle }) => {
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
            <div className={'list-item'}>
                <div>
                    <span className="dot" style={{ backgroundColor: color }} />
                    <span className="text">{text}</span>
                </div>
                <div className="list-icon">
                    <Button buttonType='icon' onClick={onClickEditVehicle}><AiOutlineEdit /></Button>
                    <Button buttonType='icon' onClick={onClickDeleteVehicle}><AiOutlineDelete /></Button>

                </div>
            </div>

            <Modal isOpen={isEditModalOpen} onClose={closeEditModal} childComponent={<VehicleForm buttonText='Update vehicle' vehicle={vehicle} />} />
            <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} childComponent={<ConfirmationCard vehicleId={vehicle._id as any} vehicleName={vehicle.name} onCancel={handleCancelDeleteModal} />} />

        </>
    );
};

export default ListItem;
