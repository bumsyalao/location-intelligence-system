import React from 'react';
// import Form, { FormProps } from './Form';

type NavbarProps = {
    // Additional props specific to Navbar
};

const Navbar: React.FC<NavbarProps> = () => {
    // const handleSubmit: FormProps['handleSubmit'] = (formData) => {
    //     // Handle form submission logic here
    //     console.log('Form submitted:', formData);
    // };

    return (
        <div>
            <h1>Navbar</h1>
            {/* <Form handleSubmit={handleSubmit} /> */}
        </div>
    );
};

export default Navbar;
