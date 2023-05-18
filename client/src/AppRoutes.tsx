import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import HomePage from './HomePage';
// import NotFoundPage from './NotFoundPage';

const AppRoutes: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Navigate to="/home" />} />
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </BrowserRouter>
    );

};



export default AppRoutes;
