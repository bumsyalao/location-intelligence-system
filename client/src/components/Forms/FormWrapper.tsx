import React from 'react';
import { FormType } from './types';
import './form.scss';

interface FormWrapperProps {
    type: FormType;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ type }) => {
    const renderForm = () => {
        switch (type) {
            case 'vehicle':
            // return <VehicleForm />;
            default:
                return null;
        }
    };

    return (
        <div className="form-container">
            {renderForm()}
        </div>
    );
};

export default FormWrapper;
