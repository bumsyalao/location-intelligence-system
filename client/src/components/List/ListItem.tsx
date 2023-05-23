import React, { useState } from 'react';
import Button from '../Button/Button';
import { BiShow } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Modal from '../Modal/Modal';
import VehicleCard from '../Card/VehicleCard';
interface ListItemProps {
    color: string;
    text: string;
    vehicleId: any;
    onSelectVehicle: any;
}

const ListItem: React.FC<ListItemProps> = ({ color, text, vehicleId, onSelectVehicle }) => {
    const selectedVehicleData = useSelector((state: RootState) => state.vehicles.selectedVehicle);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isSelected = selectedVehicleData._id === vehicleId;
    const onClickVehicle = () => {
        openModal();
        onSelectVehicle(vehicleId);
    }

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={`list-item ${isSelected ? 'selected' : ''}`}>
                <div>
                    <span className="dot" style={{ backgroundColor: color }} />
                    <span className="text">{text}</span>
                </div>
                <div className='list-icon'>
                    <Button buttonType='icon' onClick={onClickVehicle} ><BiShow /></Button>

                </div>

            </div>
            <div className='card-modal'>
                {/* modal for vehicle data */}
                <Modal isOpen={isModalOpen} onClose={closeModal} childComponent={<VehicleCard vehicle={selectedVehicleData} />} />

            </div>
        </>
    );
};

export default ListItem;
