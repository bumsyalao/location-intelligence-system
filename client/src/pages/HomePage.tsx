import React from 'react';
import SplitLayout from '../layout/SplitLayout';
import GoogleMapsLayout from '../layout/GoogleMapsLayout';
import SidebarLayout from '../layout/SidebarLayout';

type HomePageProps = {
};

const HomePage: React.FC<HomePageProps> = () => {

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
