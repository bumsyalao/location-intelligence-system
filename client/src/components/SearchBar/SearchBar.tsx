import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import VehicleForm from '../Forms/VehicleForm';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
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
                        placeholder="Search..."
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
