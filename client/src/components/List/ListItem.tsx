import React from 'react';

interface ListItemProps {
    color: string;
    text: string;
    vehicleId: any;

}

const ListItem: React.FC<ListItemProps> = ({ color, text, vehicleId }) => {


    return (
        <>
            <div className={'list-item'}>
                <div>
                    <span className="dot" style={{ backgroundColor: color }} />
                    <span className="text">{text}</span>
                </div>
            </div>

        </>
    );
};

export default ListItem;
