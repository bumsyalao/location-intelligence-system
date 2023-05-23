import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import VehicleForm from '../Forms/VehicleForm';
import useSearchVehicle from '../../hooks/useSearchVehicle';
import useFetchVehicles from '../../hooks/useFetchVehicles';
import storage from 'redux-persist/lib/storage';


const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { searchVehicle } = useSearchVehicle();
    const { fetchVehicles } = useFetchVehicles();
    let timerId: string | number | NodeJS.Timeout | undefined;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);

        //start searching when user enters 3words or more
        //clear search results if less than 3words and fetch all existing vehicles

        if (searchTerm.length < 3) {
            storage.removeItem('persist:root');
            fetchVehicles();
        }
        else {
            clearTimeout(timerId);
            timerId = setTimeout(async () => {
                await searchVehicle(searchTerm);
            }, 500)
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='search'>
                <div className="search-bar">
                    <AiOutlineSearch />
                    <input
                        type="text"
                        placeholder="Start typing to search..."
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </div>
                <Button type='submit' buttonType='primary' onClick={openModal} ><AiOutlinePlus /></Button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} childComponent={<VehicleForm buttonText='Create new vehicle' />} />
        </>
    );
};

export default SearchBar;
