import React from 'react';

interface ListItemProps {
    color: string;
    text: string;
}

const ListItem: React.FC<ListItemProps> = ({ color, text }) => {
    return (
        <div className="list-item">
            <span className="dot" style={{ backgroundColor: color }} />
            <span className="text">{text}</span>
        </div>
    );
};

export default ListItem;
