import React from 'react';

interface ButtonProps {
    buttonType: 'primary' | 'secondary' | 'success' | 'danger';
    type: 'button' | 'submit' | 'reset' | undefined;
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ type, buttonType, onClick, disabled, children }) => {
    return (
        <button className={`button ${buttonType}`} type={type} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
