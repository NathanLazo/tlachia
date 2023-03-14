import React from 'react';
import Image from 'next/image';
import Form from '@public/images/form.svg';

const Images = () => {
    return (
        <>
            <Image src={Form} width={400} height={400} alt="Form" />
        </>
    );
};

export default Images;
