import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ListItem from '../components/List/ListItem';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import useFetchAVehicle from '../hooks/useFetchAVehicle';
import Vehicle from '../types';

// import VehicleForm from '../components/Forms/VehicleForm';


const SidebarLayout = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    // const openSidebar = () => setShowSidebar(!showSidebar);
    const vehichlesData = useSelector((state: RootState) => state.vehicles?.vehicles);
    const [selectedVehicleId, setSelectedVehicleId] = useState(vehichlesData?.[0]?._id);
    const { loading, error, vehicle, fetchVehicle } = useFetchAVehicle(selectedVehicleId);


    const handleOnSelectVehicle = (selectVehicleId: any) => {
        setSelectedVehicleId(selectVehicleId);
    }

    useEffect(() => {
        fetchVehicle(selectedVehicleId);
    }, [selectedVehicleId])

    return (

        <div className={`sidebar ${showSidebar ? 'showSidebar' : ''}`} >
            <div className="sidebar-header">
                <SearchBar />
            </div>
            <div className='hideOnMobile'>
                {vehichlesData && vehichlesData?.map((vehicle: Vehicle) => {
                    return <ListItem key={vehicle._id} vehicleId={vehicle._id} text={vehicle.name}
                        color={vehicle.status === 'active' ? 'green' : 'red'} onSelectVehicle={handleOnSelectVehicle} />;
                })
                }

            </div>
        </div>


    );
}

export default SidebarLayout;