import React from 'react';

const PriceSection = (props) => {
    return (
        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7">
            <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">{props.title}</h2>
                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                    ${props.price}
                    <span className="font-normal text-base">/{props.plan}</span>
                </p>
            </div>
            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">{props.text}</p>
        </div>
    );
};

export default PriceSection;
