import React from 'react';
import Form from './Form';

const Contact = () => {
    return (
        <div id="contact" className="w-full flex items-center   justify-center">
            <div className="block bg-white shadow-md drop-shadow-xl rounded my-12 py-12 lg:px-28 px-16">
                <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Contacta con nosotros</p>
                <Form />
            </div>
        </div>
    );
};

export default Contact;
