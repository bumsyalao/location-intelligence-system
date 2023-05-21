import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ListItem from '../components/List/ListItem';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Vehicle from '../types';

const SidebarLayout = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    // const openSidebar = () => setShowSidebar(!showSidebar);
    const vehichlesData = useSelector((state: RootState) => state.vehicles?.vehicles);
    const [selectedVehicle, setSelectedVehicle] = useState({ ...vehichlesData[0] });

    const handleOnSelectVehicle = (event: Event) => {
        const target = event.target as HTMLInputElement;
        console.log(target?.value, '======');
        // const selectedVehicle = vehichlesData.find((vehicle: Vehicle) => vehicle.name === target.value);
        // setSelectedVehicle(selectedVehicle);
    }

    return (

        <div className={`sidebar ${showSidebar ? 'showSidebar' : ''}`} >
            <div className="sidebar-header">
                <SearchBar />
            </div>
            <div className='hideOnMobile'>
                {vehichlesData && vehichlesData?.map((vehicle: Vehicle) => {
                    return <ListItem key={vehicle._id} text={vehicle.name} color={vehicle.status === 'active' ? 'green' : 'red'} />;
                })
                }

            </div>
        </div>


    );
}

export default SidebarLayout;