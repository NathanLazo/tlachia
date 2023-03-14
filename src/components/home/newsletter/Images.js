import React from 'react';
import Image from 'next/image';
import MailImage from '@public/images/newsletter-1.png';

const ImageComponent = () => {
    return (
        <>
            <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                <div className="h-full xl:w-full lg:w-1/2 w-full ">
                    <Image alt="mail" src={MailImage} />
                </div>
            </div>
        </>
    );
};
export default ImageComponent;
