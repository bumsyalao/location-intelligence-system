import React, { Children, useEffect, useRef } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    childComponent: React.JSX.Element;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, childComponent }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);


    if (!isOpen) {
        return null;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };



    return (
        <div className="modal-overlay  active" >
            <div className="modal" ref={modalRef}>
                {/* <button className="close-button" onClick={onClose}>
                    X
                </button> */}
                {childComponent}
            </div>
        </div>
    );
};

export default Modal;
