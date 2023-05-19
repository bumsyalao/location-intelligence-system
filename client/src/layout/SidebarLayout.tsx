import React, { useState } from 'react';



const SidebarLayout = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    const openSidebar = () => setShowSidebar(!showSidebar);

    return (
        <div className={`sidebar ${showSidebar ? 'showSidebar' : ''}`} >

        </div>
    );
}

export default SidebarLayout;