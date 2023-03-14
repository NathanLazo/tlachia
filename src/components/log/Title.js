import React from 'react';
import Image from 'next/image';
import TlachiaLogo from '@public/images/tlachia-logo.png';
import Link from 'next/link';

const LoginTitle = ({ title, text, linkhref }) => {
    return (
        <>
            <div className="h-12 w-auto">
                <Link href="/" passHref>
                    <div className="cursor-pointer w-fit">
                        <Image src={TlachiaLogo} alt="Tlachia" width={80} height={80} />
                    </div>
                </Link>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{title}</h2>
            <div className="mt-2 text-medium text-gray-600">
                O{' '}
                <Link href={linkhref}>
                    <div className="font-bold text-[#DFB600] hover:text-[#B59400] cursor-pointer">{text}</div>
                </Link>
            </div>
        </>
    );
};

export default LoginTitle;
