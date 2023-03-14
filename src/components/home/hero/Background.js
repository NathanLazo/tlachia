import React from 'react';
import BackgroundImage from '@public/images/hero-bg.png';
import Image from 'next/image';

const Background = () => {
    return (
        <>
            <div className="hidden md:block">
                <div className="absolute -z-10 bg-cover bg-center inset-0">
                    <Image src={BackgroundImage} alt="Color" height={1700} />
                </div>
            </div>
        </>
    );
};
export default Background;
