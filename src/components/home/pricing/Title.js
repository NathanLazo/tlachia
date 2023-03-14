import React from 'react';
import Image from 'next/image';
import PricingIcon from '@public/images/pricing.svg';

const Title = () => {
    return (
        <>
            <div className="ml-0 2xl:ml-12 lg:w-1/2 w-full">
                <p className="text-base leading-4 text-gray-600">Elige tu suscripción </p>
                <h2 className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">Nuestros planes</h2>
                <div className="hidden lg:block">
                    <Image src={PricingIcon} alt="pricing" width={500} height={500} />
                </div>
            </div>
        </>
    );
};
export default Title;
