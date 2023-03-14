import React from 'react';
import Images from './Images';
import Form from '@components/home/newsletter/Form';

const Newsletter = () => {
    return (
        <>
            <div className="p-6 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
                <Images /> {/* Image component */}
                <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">Suscribete</h1>
                    <p className="text-base leading-normal text-gray-600 text-center xl:text-left">Únete a nuestra comunidad y entérate de los avances del proyecto y todas sus futuras versiones</p>
                    <Form /> {/* Form component */}
                </div>
            </div>
        </>
    );
};
export default Newsletter;
