import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ListItem from '../components/List/ListItem';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

import Vehicle from '../types';

const SidebarLayout = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    const vehichlesData = useSelector((state: RootState) => state.vehicles?.vehicles);


    return (

        <div className={`sidebar ${showSidebar ? 'showSidebar' : ''}`} >
            <div className="sidebar-header">
                <SearchBar />
            </div>
            <div className='hideOnMobile vehicle-list'>
                {vehichlesData.length === 0 && <div> No vehicles found</div>}
                {vehichlesData && vehichlesData?.map((vehicle: Vehicle) => {
                    return <ListItem key={vehicle._id} vehicleId={vehicle._id} text={vehicle.name}
                        color={vehicle.status === 'active' ? 'green' : 'red'} />;
                })
                }

            </div>
        </div>


    );
}

export default SidebarLayout;