import React from 'react';
import Button from '../Button/Button';
import { BiShow } from 'react-icons/bi'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
interface ListItemProps {
    color: string;
    text: string;

}

const ListItem: React.FC<ListItemProps> = ({ color, text }) => {
    return (
        <div className="list-item">
            <div>
                <span className="dot" style={{ backgroundColor: color }} />
                <span className="text">{text}</span>
            </div>
            <div className='list-icon'>
                <Button buttonType='icon' ><BiShow /></Button>
                <Button buttonType='icon'><AiOutlineEdit /></Button>
                <Button buttonType='icon'><AiOutlineDelete /></Button>
            </div>
        </div>
    );
};

export default ListItem;
