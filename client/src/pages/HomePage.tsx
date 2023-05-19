import React, { useEffect } from 'react';
import SplitLayout from '../layout/SplitLayout';
import GoogleMapsLayout from '../layout/GoogleMapsLayout';
import SidebarLayout from '../layout/SidebarLayout';
import useFetchVehicles from '../hooks/useFetchVehicles';

type HomePageProps = {
};

const HomePage: React.FC<HomePageProps> = () => {
    const { loading, error, vehicles } = useFetchVehicles();

    return (
        <>
            <SplitLayout>
                <SidebarLayout />
                <GoogleMapsLayout />
            </SplitLayout>
        </>
    );
};

export default HomePage;
