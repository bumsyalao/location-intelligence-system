import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import Button from '../Button/Button';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
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
            <Button type='submit' buttonType='primary' ><AiOutlinePlus /></Button>
        </div>
    );
};

export default SearchBar;
