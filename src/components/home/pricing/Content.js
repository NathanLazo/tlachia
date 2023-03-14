import React from 'react';
import Image from 'next/image';
import CirclesImage from '../../../../public/images/circles.png';
import PriceSection from './PriceSection';

const Content = () => {
    return (
        <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
            <div className="absolute w-full -ml-12 mt-24 opacity-25">
                <Image src={CirclesImage} alt="background circle images" />
            </div>
            <PriceSection title="Productor" price="" text="Por cada alta de producto en el sistema, se cobra directamente a tu cuenta." plan="alta" />
            <div className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                <div className="w-2.5  h-auto bg-[#DFB600] rounded-tl-md rounded-bl-md" />
                <div className="w-full p-8">
                    <div className="md:flex items-center justify-between">
                        <h2 className="text-2xl font-semibold leading-6 text-gray-800">Personal</h2>
                        <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                            $<span className="font-normal text-base">/anual</span>
                        </p>
                    </div>
                    <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Con esta suscripción podrás hacer registros en los productos dados de alta</p>
                </div>
            </div>
            <PriceSection title="Empresa" price="" text="Por cada alta de producto en el sistema, se cobra directamente a tu cuenta 10+ cuentas personales" plan="anual" />
        </div>
    );
};

export default Content;
